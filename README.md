## Basic Node Project with React & TypeScript

It's the Boiler plate for React without CRA(Create-React-App).

### How to use?

#### Open terminal and enter the below line.


```
npm i
```


#### If the download will be done, enter.


```
npm run dev
```


#### And Go to  http://localhost:3090/

## webpack.config.ts에 대한 설명

자세한 설명을 적어두었으며, 따로 다루지 않은 개념은 주석으로 코드 안에 넣어두었습니다. 사용한 설정들 각각이 없애도 무방한지 확인해보았으며 없으면 에러를 띄우는 속성들만 살려두었습니다.

<details>

<summary>code</summary>

```js
const path = require("path");
const webpack = require("webpack");
const ReactRefreshWebpackPlugin = require("@pmmmwh/react-refresh-webpack-plugin");
const Dotenv = require("dotenv-webpack");
const HtmlWebpackPlugin = require("html-webpack-plugin");

const projectName = "Book_Comment_Web";
const isDevelopment = process.env.NODE_ENV !== "production";

const config = {
  name: "bookcommentweb",
  // mode 옵션을 사용하면 webpack에 내장된 최적화 기능을 사용할 수 있습니다.
  mode: isDevelopment ? "development" : "production",
  devtool: !isDevelopment ? "hidden-source-map" : "eval",
  resolve: {
    // 빌드 대상 확장자 목록
    extensions: [".js", ".jsx", ".ts", ".tsx", ".json"],
    //파일 경로를 path 모듈을 통해 간단하게 지정한다.
    alias: {
      "@hooks": path.resolve(__dirname, "src/hooks"),
      "@components": path.resolve(__dirname, "src/components"),
      "@router": path.resolve(__dirname, "src/components/router"),
      "@utils": path.resolve(__dirname, "src/utils"),
      "@redux": path.resolve(__dirname, "src/redux"),
    },
  },
  // entry 속성은 웹팩에서 웹 자원을 변환하기 위해 필요한 최초 진입점이자 자바스크립트 파일 경로입니다.
  entry: {
    app: "./src/client", // client.tsx 가 번들 tsx 파일
  },
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        loader: "babel-loader",
        options: {
          presets: [
            [
              "@babel/preset-env",
              {
                targets: { browsers: ["last 2 chrome versions"] },
              },
            ],
            "@babel/preset-react",
            "@babel/preset-typescript",
          ],
          env: {
            development: {
              plugins: [
                ["@emotion/babel-plugin", { sourceMap: true }],
                require.resolve("react-refresh/babel"),
              ],
            },
            production: {
              plugins: ["@emotion/babel-plugin"],
            },
          },
        },
        exclude: path.join(__dirname, "node_modules"),
      },
      {
        test: /\.css?$/,
        use: ["style-loader", "css-loader"],
      },
      {
        test: /\.(svg|avif|webp)$/i,
        loader: "file-loader",
      },
      {
        test: /\.(woff|woff2|eot|ttf|otf)$/i,
        loader: "file-loader",
      },
    ],
  },
  plugins: [
    new webpack.EnvironmentPlugin({
      NODE_ENV: isDevelopment ? "development" : "production",
    }),
    new Dotenv(),
    new HtmlWebpackPlugin({
      template: "./src/index.html",
    }),
  ],
  output: {
    path: path.join(__dirname, "dist"),
    filename: "[name].js",
    publicPath: isDevelopment ? "" : `/${projectName}/`,
  },
  devServer: {
    historyApiFallback: true,
    port: 3080,
    devMiddleware: { publicPath: "" },
    static: { directory: path.resolve(__dirname) },
  },
};

if (isDevelopment && config.plugins) {
  config.plugins.push(new ReactRefreshWebpackPlugin());
}

module.exports = config;
```

</details>

### modules

| key                 | 설명                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                           |
| ------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| path                | node.js가 기본적으로 제공하는 모듈이며, **파일/폴더/디렉토리** 등의 경로를 편리하게 설정할 수 있게 해줍니다.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                   |
| webpack             | webpack을 사용하기 위한 모듈입니다. 이 코드에서는 dev모드와 production 모드를 나누기 위해서 사용합니다.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                        |
| refresh             | 쉽계 얘기하자면, dev모드일 때 파일을 저장만 하더라도 수정사항이 웹에 표시됩니다. 이 것이 **Fast Refresh**이죠. dev-server와 함께 쓰이며 이를 가능하게 해줍니다. React 구성 요소에 대해 "Fast Refresh"(Hot Reloading이라고도 하는)을 활성화하는, 아직 공식적인 node package는 아닌 Webpack 플러그인입니다. 이를 사용하기 위해서는 babel-loader의 env에서도 refresh를 설정해주어야 하며, plugin으로도 추가해주어야 합니다. 실제로 이 플러그인을 사용하기 전에 에러가 났었습니다. [참고](https://github.com/keinn51/Book_Comment_Web/wiki/%24RefreshReg%24-is-not-defined) refresh를 해주는 특정 변수 혹은 방법이 지정되어 있지 않았던 것으로 보이며, 이 플러그인을 사용해주면서 해결 되었습니다. |
| dotenv              | dotenv란 `.env` 파일에 선언한 변수를 process.env 에 로드해주는 무의존성(zero-dependency) 모듈입니다. 이 dotdenv는 `os` 와 `path` 모듈을 통해 `.env` 파일의 절대 경로를 찾고, `fs` 모듈로 `.env` 파일을 물리적으로 읽어들여 process.env 에 key-value 형식으로 담고 있습니다. os, path, fs 모듈은 Node.js가 기본적으로 제공하는 모듈 중 하나입니다. 이처럼 dotenv 는 Node.js 의 기본 환경에서 실행되도록 의도된 패키지이므로 무의존성 모듈이라고 할 수 있는 것이지요. 이 역시 디버깅을 통해 알아내었습니다. [참고](https://github.com/keinn51/Book_Comment_Web/wiki/dotenv-can%E2%80%99t-get-the-process.env)                                                                                    |
| html-webpack-plugin | html에 번들 js에 대한 별도의 `script태그`를 추가해주지 않아도 자동으로 입력해주는 플러그인입니다. 이는 번들 js의 파일 이름이 해시값일 때 더욱 효과가 있습니다. `[name].[hash].js` 이런 식으로 말입니다.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                        |

### babel

| 개념    | 설명                                                                                                                                                                                                                                                                                                   |
| ------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| test    | 바벨이 처리할 확장자입니다. 만약 tsx라면 바벨은 이를 js로 바꾸어줄 것입니다.                                                                                                                                                                                                                           |
| loader  | `babel`은 es6 문법이나 타입스크립트 문법을 범용할 수 있는 js 문법으로 바꾸어줍니다. 또한 `style-loader`는 css문법을 모듈에서 Import할 수 있게 만들어줍니다. 이 것을 쓰지 않으면 css 모듈을 js모듈로 불러오더라도 적용이 되지 않습니다. `css-loader`는 css를 처리해줍니다. `file-loader`는 이미지 파일과 글꼴 파일을 **content hash**을 적용해 파일 명을 변환해줍니다.                                                              |
| preset  | plugin들을 포함한 번들(plugin들을 모아놓은 파일이라고 생각)파일입니다. 여기서 사용하는 세 가지의 preset은 공식 preset입니다. `env`는 최신 자바스크립트 문법을 사용할 수 있도록 만들어주며, react & typescript는 각각을 변환해줍니다.                                                                   |
| target  | target에서 저는 크롬의 최신 두 가지 버전을 대상으로 합니다. 이렇게 대상을 지정해두지 않으면 현재는 오류를 띄웁니다. **regenerator** 오류가 뜨는데 이는, 기본 preset-env 에서 es6 -> es5로의 변환은 하지만, **async/await 문법을 제공하지 않습니다.** 최신 브라우저를 대상으로 하면 이 것이 가능합니다. |
| env     | development일 때에는 `sourceMap`을 사용합니다. (sourceMap이 무엇인지는 아래에서 다룹니다.) 또한 여기서는 refresh를 사용해 수정사항이 화면에 바로 보이도록 해줍니다.                                                                                                                                    |
| exclude | 웹팩의 대상에서 제외되는 경로를 지정합니다.                                                                                                                                                                                                                                                            |

### devtool

devtool 옵션은 소스맵 생성 여부와 방법을 제어합니다. (eval은 build가 빠름)

**소스 맵(Source Map)이란 배포용으로 빌드한 파일과 원본 파일을 서로 연결시켜주는 기능**입니다. 보통 서버에 배포를 할 때 성능 최적화를 위해 HTML, CSS, JS와 같은 웹 자원들을 압축합니다. 그런데 만약 압축하여 배포한 파일에서 에러가 난다면 어떻게 디버깅을 할 수 있을까요?

정답은 바로 소스 맵을 이용해 배포용 파일의 특정 부분이 원본 소스의 어떤 부분인지 확인하는 것입니다. 이러한 편의성을 제공하는 것이 소스 맵입니다.

| key               | 성능                                | 배포 | 설명                                                                      |
| ----------------- | ----------------------------------- | ---- | ------------------------------------------------------------------------- |
| hidden-source-map | build: 가장 느림 rebuild: 가장 느림 | 가능 | 참조가 없으며, 에러 보고 목적으로 소스맵을 사용할 때 선택 할 수 있습니다. |
| eval              | build: 빠름 rebuild: 가장 빠름      | 불가 | 최대 성능을 갖춘 개발 빌드를 위해 추천하는 옵션입니다.                    |

### output

| key            | 설명                                                                                                                                                                                                                                                                                                                                                                                                                                                        |
| -------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| path           | 모든 출력 파일을 저장할 로컬 디스크 디렉토리 (절대 경로)입니다. 예를 들어 `path.join(\_\_dirname, "dist")`라고 한다면, 로컬 디렉토리에서 dist라는 폴더에 출력 파일들을 저장합니다.                                                                                                                                                                                                                                                                          |
| filename       | 번들 js파일의 이름을 설정해줍니다.                                                                                                                                                                                                                                                                                                                                                                                                                          |
| **publicPath** | 현재 url의 end point가 여기서 정한 `path`로 시작되면, output에 해당하는 파일들을 가져옵니다. 만약 `localhost::3000`가 주소인 상태에서 `publicPath : '/'` 라고 한다면, `localhost::3000/` 로 시작하는 것들은 모두 output의 파일을 사용합니다. 그 후 웹팩에서 발생하는 모든 URL은 `”/”` 로 시작하도록 다시 작성됩니다. `src="picture.jpg"` 을다시 쓴다면, `src="/picture.jpg"` 이런 식이 될 것이며, 결론적으로 url은 `http://server/picture.jpg` 일 것입니다. |

### webpack dev server

| key                | 설명                                                                                                                                                                                                                                            |
| ------------------ | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| historyApiFallback | 사전 정의 적으로만 말하자면, 히스토리API를 사용하는 웹 어플리케이션 개발 시(예를 들어 SPA) 사용하며 이때 true로 설정합니다. 그런데 사전적인 용법으로는 이해가 되지 않으므로 아래 따로 정리합니다. 이 옵션은 일단 react router 할 때 필요합니다. |
| port               | 데브서버의 포트 번호를 임의로 설정하는 곳입니다.                                                                                                                                                                                                |

<details>

<summary>historyApiFallback 에 대한 추가 설명</summary>

주소가 `http://localhost:3080/detailpage/9788937834790` 일 때 새로고침을 해봅니다. 잘 될 것이라고 생각하나요? 이 페이지가 그대로 나올까요?

정답은 **나온다** 입니다! 이지만 사실 나오는게 정상적이지는 않습니다. 왜냐햐면 우리는 `http://localhost:3080` 에 대해서만 server와 연결해주었으니 `http://localhost:3080/detailpage/9788937834790` 에 해당하는 server는 없어야 합니다.
그렇다면 어떻게 이 페이지가 보일까요? 그 것은 `Link` 태그를 쓸 때 `Component`를 연결해주었기 때문에, **라우팅**이 된 것 뿐입니다. (주소가 해당 주소로 바뀌면 그에 맞는 Component를 띄워주라고 했을 뿐이죠.)

```jsx
<Route path="/search/:search/:display/:start/*" element={<Search />} />
```

이런 식으로 말입니다. `end point에 해당하는 컴포넌트를 띄워달라고 한 것`입니다. 따라서 `Link` 를 타고 가지 않고, 주소 그 자체를 입력했을 때에는 서버가 못 알아먹어야 정상입니다.

**historyApiFallback**이 이를 가능하게 만들어줍니다. historyApiFallback은 HTML5의 History API를 사용하는 경우에, 설정해놓은 url을 포함하는 url에 접근했을때 `404 responses`를 받게 되는데 이때도 `index.html`을 서빙하는 효과를 줍니다. 마치 `http://localhost:3080` 로 일단 갔다가, `/detailpage/9788937834790` 라는 라우터로 이동하는 것처럼 보입니다.

React와 react-router-dom을 사용해 프로젝트를 만들때 `react-router-dom이 내부적으로 HTML5 History API를 사용`하므로 미지정 경로로 이동했을때 혹은 그 상태에서 refresh를 했을때(새로고침)와 같은 경우에도 애플리케이션이 적절히 렌더링을 할 수 있습니다. react 내부적으로 세션 기록을 저장 여부를 설정해주는 옵션인 것입니다.

따라서 우리는 `http://localhost:3080` 가 붙은 주소에 대해서는 마치 주소가 있는 것처럼 행동할 수 있습니다. 해당 주소가 세션 기록에 저장된 듯이 말입니다. **historyApiFallback** 이라는 옵션명은 historyAPI으로 주소에 대한 Fallback(대비책)을 세웠기 때문에 이 옵션명을 사용하지 않았을까 생각합니다.

</details>
