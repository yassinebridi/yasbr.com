import { List } from '@components';
import { prevItems, nowItems } from '@data';
import { GithubIcon } from '@design-system';
import React from 'react';

export interface CodeEditorProps {}
const CodeEditor: React.FC<CodeEditorProps> = () => {
  return (
    <div className="text-xl font-normal text-gray-400">
      <h2 id="codeEditor" className="pt-2 text-3xl font-bold text-white">
        <a href="#codeEditor" title="codeEditor">
          Code Editor
        </a>
      </h2>

      <div className="mt-6">
        <List title="I've previously used:" items={prevItems} />
      </div>

      <div className="mt-6">
        <List title="But right now I'm using:" items={nowItems} />
      </div>

      <div className="mt-6">
        <p className="block">You can find out more about my vim setup here:</p>
        <a
          target="_blank"
          className="flex items-center text-yellow-300 underline"
          href="https://github.com/yassinebridi/.dotfiles/tree/master/nvim/.config/nvim"
          title="codeEditor"
        >
          <GithubIcon cn="h-6 w-6 mr-3" />
          yassinebridi/.dotfiles/nvim
        </a>
      </div>
    </div>
  );
};

export default CodeEditor;
