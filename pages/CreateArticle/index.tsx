import React from 'react';
import '@css/CreateArticle/CreateArticle.css';
import { getAuth } from '@cert/AuthStorage';
import { AuthStorageType, ReviewPostingFileType, ReviewPostingUrlType } from '@globalObj/types';
import { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router';
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';

const CreateArticle = () => {
  const navigate = useNavigate();
  const [articleTitle, setArticleTitle] = useState('');
  const [articleContent, setArticleContent] = useState('');
  const [categoryId, setCategoryId] = useState(0);
  const [postFileArr, setPostFileArr] = useState<ReviewPostingFileType[]>([]);
  const [postUrlArr, setPostUrlArr] = useState<ReviewPostingUrlType[]>([]);

  const postImageToS3 = async (boardId: number) => {
    const formData = new FormData();
    if (postFileArr.length) {
      postFileArr.forEach((file) => {
        formData.append('file', file['file']);
      });
      formData.append('boardId', boardId.toString());
      await axios
        .post(`http://${process.env.IP_ADDRESS}/image/post_image.php`, formData)
        .catch((err) => alert(err));
    }
  };

  const onClickSubmit = () => {
    if (getAuth()) {
      axios
        .post(`http://${process.env.IP_ADDRESS}/board/post_article.php`, {
          title: articleTitle,
          content: articleContent,
          categoryId,
          userId: (getAuth() as AuthStorageType)['userId'],
          loginId: (getAuth() as AuthStorageType)['loginId'],
        })
        .then(async (res) => {
          await postImageToS3(res.data);
          alert('게시글이 생성되었습니다.');
          navigate(`/category/${categoryId}`);
        })
        .catch((error) => {
          alert(error.response.data);
        });
    }
  };

  const onClickUpload = (e: any) => {
    setPostFileArr((prev) =>
      prev.concat(
        Array.from(e.target.files as Blob[]).map((file: Blob, idx) => ({
          id: prev.length + idx,
          file,
          type: file['type'].slice(0, 5),
        })),
      ),
    );
    setPostUrlArr((prev) =>
      prev.concat(
        Array.from(e.target.files as Blob[]).map((file: Blob, idx) => ({
          id: prev.length + idx,
          url: URL.createObjectURL(file),
          type: file['type'].slice(0, 5),
        })),
      ),
    );
  };

  return (
    <div className="article_create">
      <div className="article_create-header">
        <p className="font-25">당신의 생각을 들려주세요</p>
        <p>{(getAuth() as AuthStorageType)['loginId']}님 Squares에서 최고의 팀원들과 함께하세요.</p>
      </div>
      <div className="article_create-title">
        <p className="font-18">제목</p>
        <textarea
          className={`article_create-title_textarea`}
          onChange={(e) => setArticleTitle(e.target.value)}
          cols={50}
          placeholder="제목을 입력해주세요"
        />
      </div>
      <div className="article_create-category">
        <p className="font-18">카테고리</p>
        <form>
          <select
            className="article_create-select"
            onChange={(e) => setCategoryId(parseInt(e.target.value, 10))}
          >
            <option value={0}>EDITOR'S CHOICE</option>
            <option value={1}>WEEKLY BEST</option>
            <option value={2}>Q&A</option>
            <option value={3}>KNOWLEDGE</option>
          </select>
        </form>
      </div>
      <div className="article_create-content">
        <p className="font-18">내용</p>
        <ReactQuill
          className="article_create-content_textarea"
          theme="snow"
          onChange={(content) => {
            setArticleContent(content);
          }}
        />
      </div>
      {postUrlArr.length ? (
        <div>
          <div>
            <p className="font-18">미리보기</p>
          </div>
          <div className="article_create-uploaded_image_box">
            {postUrlArr.map((fileObj) => (
              <img className="article_create-uploaded_image" src={fileObj['url']} alt="none" />
            ))}
          </div>
        </div>
      ) : null}
      <div className="flex_horizontal_end" style={{ padding: '20px 0 20px 0' }}>
        <div className="margin_right_10px button">
          <label htmlFor="article_create-image_upload-input">
            <span>이미지 업로드</span>
          </label>
          <input
            id="article_create-image_upload-input"
            type="file"
            accept="image/*"
            onChange={onClickUpload}
            required
          />
        </div>
        <div className="flex_vertical_middle button" onClick={onClickSubmit}>
          게시글 생성
        </div>
      </div>
    </div>
  );
};

export default CreateArticle;
