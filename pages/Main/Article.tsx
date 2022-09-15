import React from 'react';

const Article = (props: { articleId: number | null }) => {
    const { articleId } = props;
    return (
        <div>
            <div className='article-title'>사는얘기에 관하여.</div>
            <div className='article-writter'>
                <span>
                    QUV 프로덕트팀
                </span>
                <span>
                    6추
                </span>
                <span>
                    2일 전
                </span>
            </div>
            <div className='article-content'>
                안녕하세요. OKKY 프로덕트팀입니다.

                2.0 릴리즈 이후 약 3주가 흘렀습니다.
                런칭 직후 2.0.2a, 2.0.3 를 릴리즈하고 여러분의 건설적인 피드백 늘 귀 기울이면서 현재 v2.0.4 를 준비중에 있습니다.
                더불어 런칭 이후부터 최근까지 꾸준히 의견 주셨던 “사는얘기”에 대해서 짧게 이야기를 공유드릴까 합니다.
                OKKY 팀이 2.0을 준비할 때 시스템 아키텍쳐와 디자인, 두가지 핵심 개선과제가 있었습니다.

                물론 이 두가지의 목표도 팀 입장에서는 매우 큰 프로젝트이고 큰 변화이지만 더 강한 동기부여가 필요했습니다.

                OKKY 를 찾는 유저들에게 2.0 다음을 기약할 수 있고 지속적인 발전을 기대할 수 있는 핵심 요소를 더 찾아내야 했습니다.

                그래서 현재보다 더 많은 개발자들이 연대할 수 있는 공간, 그리고 22년 간 유지해 온 OKKY 의 가치를 어떻게 더 확장시킬 것인가를 한번 더 고민했습니다.
            </div>
            <div className='article-comment_textarea'>
                <div></div>
                <div></div>
            </div>
            <div className='article-comments'>
            </div>
        </div>
    );
}

export default Article;