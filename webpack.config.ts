import path from 'path';
import webpack from 'webpack';
import ReactRefreshWebpackPlugin from '@pmmmwh/react-refresh-webpack-plugin';
import ForkTsCheckerWebpackPlugin from 'fork-ts-checker-webpack-plugin';

// production 이면 배포용이고 아니면 개발용이다. (mode에 따라서 달라진다.)
const isDevelopment = process.env.NODE_ENV !== 'production';

// 타입스크립트는 자바스크립트에 타입만 적어주는 친구다. 
// 아래는 config 라는 변수가 webpack.Configuration 이라는 
// 타입이라는 것을 알려주는 것이다.
const config: webpack.Configuration = {
  name: 'sleact',
  // mode 옵션을 사용하면 webpack에 내장된 최적화 기능을 사용할 수 있습니다.
  mode: isDevelopment ? 'development' : 'production',
  // devtool 옵션은 소스맵 생성 여부와 방법을 제어합니다. (eval은 build가 빠름)
  devtool: !isDevelopment ? 'hidden-source-map' : 'eval',
  resolve: {
		// 바벨이 처리할 확장자 목록
    extensions: ['.js', '.jsx', '.ts', '.tsx', '.json'],
    alias: {  //파일 이름 맞춰서 지정해야 한다!
      '@hooks': path.resolve(__dirname, 'hooks'), // .../.. 이런거 없애준다.
      '@components': path.resolve(__dirname, 'components'),
      '@layouts': path.resolve(__dirname, 'layouts'),
      '@pages': path.resolve(__dirname, 'pages'),
      '@utils': path.resolve(__dirname, 'utils'),
      '@typings': path.resolve(__dirname, 'typings'),
    },
  },
  entry: {
    app: './client',  // client.tsx 가 번들 tsx 파일이다.
  },
  module: {
    rules: [
      {
				// ts, tsx 를 바벨로더가 자바스크립트로 바꾸어준다.
        test: /\.tsx?$/,
        loader: 'babel-loader',
        options: {
          presets: [  //바꿔줄 때의 바벨의 설정을 말한다. 세 가지 프리셋 모두 필요!
            [
              '@babel/preset-env',
              {  //크롬의 최신 두 가지 버전을 대상으로 바꾸어준다.
								// preset-env 가 매우 유용한 것! 
								// 내가 어떤 버젼으로 만들든지 돌아가게 바꾸어준다.
                targets: { browsers: ['last 2 chrome versions'] },
                debug: isDevelopment,
              },
            ],
            '@babel/preset-react',
            '@babel/preset-typescript',
          ],
          env: {  //css에서 emotion 이라는 css style이 있는데, 이를 가능하게 해준다.
            development: {
              plugins: [['@emotion', { sourceMap: true }], require.resolve('react-refresh/babel')],
            },
            production: {
              plugins: ['@emotion'],
            },
          },
        },
        exclude: path.join(__dirname, 'node_modules'),
      },
      {  //css 파일을 JS 파일로 만들어주는 신기한 로더들...
        test: /\.css?$/,
        use: ['style-loader', 'css-loader'],
      },
    ],
  },
  plugins: [
		// NODE_ENV 는 프론트에서 접근할 수 없는데, EnvironmentPlugin 이 접근하게 해줌
    new webpack.EnvironmentPlugin({ NODE_ENV: isDevelopment ? 'development' : 'production' }),
    new ForkTsCheckerWebpackPlugin({
      async: false,
    }),
  ],
  output: {  //dist 라는 폴더 안에, 위에서 entry:app 에 설정해준 파일들을 만들어 넣어준다.
						// 약간 Makefile 같은데..? (여러개의 app 설정 가능)
    path: path.join(__dirname, 'dist'),
    filename: '[name].js',
    publicPath: '/dist/',
  },
  devServer: {
    historyApiFallback: true, // react router 할 때 필요
		//히스토리API를 사용하는 웹 어플리케이션 개발 시(예를 들어 SPA) 사용하며 이때 true로 설정한다.
    port: 3090,  // 데브서버의 포트 번호를 임의로 설정하는 곳이다.
    static: { directory: path.resolve(__dirname) },
  },
};

if (isDevelopment && config.plugins) {
  config.plugins.push(new webpack.HotModuleReplacementPlugin());
  config.plugins.push(new ReactRefreshWebpackPlugin());
}

export default config;
