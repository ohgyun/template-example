template-example
================

템플릿 엔진 구현 예제  
실시간 수정 사항을 확인해서 프리 컴파일하고 서비스를 다시 시작합니다.


1. `node.js`가 설치되어 있지 않다면 설치합니다. (http://nodejs.org/)


2. 빌드 도구인 `grunt` 커맨드 라인 툴을 설치하지 않았다면 설치합니다. (http://gruntjs.com/)  
  아래 명령으로 설치할 수 있습니다.

        $ sudo npm install -g grunt-cli


3. 리파지터리를 클론 받고, 해당 디렉토리에서 아래 명령으로 의존 모듈을 설치합니다.

        $ git clone git@github.com:ohgyun/template-example.git
        $ cd template-example
        $ npm install
       

4. 그런트 빌드로 라이브리로드 서버를 시작할 수 있습니다.

        $ grunt


5. 브라우저에서 `http://localhost:3000/index.html`로 접속하세요.


6. `/src/tmpl/` 디렉토리에 있는 템플릿 파일(*.tmpl)을 수정해보세요.  
  자동으로 수정한 내용을 `tmpl.complied.js` 파일로 컴파일하고,  
  해당 페이지를 새로고침합니다.
