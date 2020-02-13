# cra-template-ko-craco

이 프로젝트는 [Create React App](https://github.com/facebook/create-react-app)의 템플릿에 따라 제작 된 한국어 버전 `cra-template-ko-craco` 입니다.
CRA의 `eject` 대신, [craco](https://github.com/gsoft-inc/craco)를 사용해 사용자 정의 개발 환경을 구성(Configuration) 할 수 있습니다. (예: [Webpack 설정 덮어쓰기](https://github.com/gsoft-inc/craco/blob/master/packages/craco/README.md#overridewebpackconfig))

```sh
$ npx create-react-app <프로젝트_이름> --template cra-template-ko-craco
```

## 추가된 항목

기본 템플릿 `cra-template`에 추가된 항목입니다.

- `node-sass` 패키지 추가
- `classnames` 패키지 추가
- `serve` 패키지 및 빌드 실행 명령 추가
- `jsconfig.json` 절대 경로 및 Webpack 별칭(alias) 설정
- Browserslist 배포(production) 한국(KR) 환경으로 수정 및 IE 11 이상 지원 설정
- `craco` 패키지 추가
- `craco.config.js` 설정 → Webpack 설정 덮어쓰기 (Sass Sourcemap 사용 설정)


## 커스텀 템플릿

🤔 커스텀 템플릿을 만들고자 한다면? 공식 [커스텀 템플릿(custom-templates)](https://create-react-app.dev/docs/custom-templates/) 문서를 참고하세요.