import React, { useState, useCallback } from 'react';
import { Slate, Editable, withReact } from 'slate-react';
import { createEditor } from 'slate';
import { withHistory } from 'slate-history';
import EditorToolbar from './EditorToolbar';
import { renderElement, renderLeaf } from './EditorElements';
import { logSelectedText, toggleFormat } from './utils';

const BlogEditor = () => {
  const [editor] = useState(() => withHistory(withReact(createEditor())));
  const [value, setValue] = useState([
    {
      type: 'paragraph',
      children: [{ text: 'A line of text in a paragraph.' }],
    },
  ]);

  return (
    <div className="bg-gray-100 p-4 rounded-md">
      <Slate editor={editor} initialValue={value} onChange={(newValue) => {setValue(newValue); logSelectedText(editor)}}>
        <EditorToolbar editor={editor} />
        <Editable
          className="bg-white p-2 rounded-md"
          renderElement={renderElement}
          renderLeaf={renderLeaf}
          onKeyDown={(event) => {
            if (!event.ctrlKey) return;

            switch (event.key) {
              case 'b': {
                event.preventDefault();
                toggleFormat(editor, 'bold');
                break;
              }
              case 'i': {
                event.preventDefault();
                toggleFormat(editor, 'italic');
                break;
              }
              case 'u': {
                event.preventDefault();
                toggleFormat(editor, 'underline');
                break;
              }
            }
          }}
        />
      </Slate>
    </div>
  );
};

export default BlogEditor;
