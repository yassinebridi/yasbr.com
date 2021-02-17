import { nowItems, prevItems, withExtItems } from '@data/codeEditor';
import React from 'react';
import List from './List';

export interface CodeEditorProps {}
const CodeEditor: React.FC<CodeEditorProps> = () => {
  return (
    <div className="text-xl font-normal text-gray-400">
      <h2 id="codeEditor" className="pt-2 text-3xl font-bold text-white">
        <a href="#codeEditor" title="codeEditor">
          CodeEditor
        </a>
      </h2>

      <div className="mt-6">
        <List
          title="Now this deserves a section of its own! I've previously used:"
          items={prevItems}
        />
      </div>

      <div className="mt-6">
        <List title="But right now I'm using:" items={nowItems} />
      </div>

      <div className="mt-6">
        <List title="With these extensions:" items={withExtItems} />
      </div>
    </div>
  );
};

export default CodeEditor;
