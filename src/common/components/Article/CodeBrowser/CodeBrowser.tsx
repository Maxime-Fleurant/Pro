import SimpleBar from 'simplebar-react';
import prismjs from 'prismjs';
import { useEffect, FunctionComponent } from 'react';
import '../../../../../node_modules/prismjs/components/prism-jsx.js';
import '../../../../../node_modules/prismjs/components/prism-tsx.js';
import '../../../../../node_modules/prismjs/components/prism-typescript.js';
import '../../../../../node_modules/prismjs/components/prism-javascript.js';
import {
  browserWrap,
  browserButtonWrap,
  roundButton,
  closeButton,
  reduceButton,
  enlargeButton,
  barWrap,
  codeBox,
  cellWrap,
} from '../../Layout/style';

// TYPE
interface ICodeBrowser {
  language: string;
  code: string;
}

type TCodeBrowser = FunctionComponent<ICodeBrowser>;

const CodeBrowser: TCodeBrowser = ({ language, code }) => {
  useEffect(() => {
    prismjs.highlightAll();
  }, []);

  return (
    <div css={cellWrap}>
      <div css={browserWrap}>
        <div css={browserButtonWrap}>
          <span css={[roundButton, closeButton]} />
          <span css={[roundButton, reduceButton]} />
          <span css={[roundButton, enlargeButton]} />
        </div>
        <div css={barWrap}>
          <SimpleBar css={{ height: '100%' }}>
            <pre css={codeBox}>
              <code className={language}>
                <div>{code}</div>
              </code>
            </pre>
          </SimpleBar>
        </div>
      </div>
    </div>
  );
};

export default CodeBrowser;