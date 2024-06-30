import React from 'react';
import { useSlate } from 'slate-react';
import {
  IconBold,
  IconItalic,
  IconUnderline,
  IconAlignCenter,
  IconAlignJustified,
  IconAlignLeft,
  IconAlignRight,
  IconListCheck,
  IconListNumbers,
  IconLink,
  IconPhotoScan,
  IconX,
  IconH1,
  IconH2,
} from '@tabler/icons-react';
import {
  toggleFormat,
  isFormatActive,
  toggleBlock,
  isBlockActive,
  toggleList,
  toggleAlignment,
  isAlignmentActive,
  insertLink,
  insertImage,
  clearFormatting,
} from './utils';

const EditorToolbar = () => {
  const editor = useSlate();

  return (
    <div className="bg-gray-200 p-2 mb-2 rounded-md flex items-center">
      <button
        type="button"
        className={`px-2 py-1 rounded-md mr-2 ${
          isFormatActive(editor, 'bold')
            ? 'bg-blue-500 text-white'
            : 'bg-gray-300 text-gray-600'
        }`}
        onMouseDown={(event) => {
          event.preventDefault();
          toggleFormat(editor, 'bold');
        }}
      >
        <IconBold className="w-5 h-5" strokeWidth={2} />
      </button>

      <button
        type="button"
        className={`px-2 py-1 rounded-md mr-2 ${
          isFormatActive(editor, 'italic')
            ? 'bg-blue-500 text-white'
            : 'bg-gray-300 text-gray-600'
        }`}
        onMouseDown={(event) => {
          event.preventDefault();
          toggleFormat(editor, 'italic');
        }}
      >
        <IconItalic className="w-5 h-5" strokeWidth={2} />
      </button>

      <button
        type="button"
        className={`px-2 py-1 rounded-md mr-2 ${
          isFormatActive(editor, 'underline')
            ? 'bg-blue-500 text-white'
            : 'bg-gray-300 text-gray-600'
        }`}
        onMouseDown={(event) => {
          event.preventDefault();
          toggleFormat(editor, 'underline');
        }}
      >
        <IconUnderline className="w-5 h-5" strokeWidth={2} />
      </button>

      <div className="border-l border-gray-400 mx-2 h-6"></div>
      
      <button
        type="button"
        className={`px-2 py-1 rounded-md mr-2 ${
          isBlockActive(editor, 'heading-one')
            ? 'bg-blue-500 text-white'
            : 'bg-gray-300 text-gray-600'
        }`}
        onMouseDown={(event) => {
          event.preventDefault();
          toggleBlock(editor, 'heading-one');
        }}
      >
        <IconH1 className="w-5 h-5" strokeWidth={2} />
      </button>

      <button
        type="button"
        className={`px-2 py-1 rounded-md mr-2 ${
          isBlockActive(editor, 'heading-two')
            ? 'bg-blue-500 text-white'
            : 'bg-gray-300 text-gray-600'
        }`}
        onMouseDown={(event) => {
          event.preventDefault();
          toggleBlock(editor, 'heading-two');
        }}
      >
        <IconH2 className="w-5 h-5" strokeWidth={2} />
      </button>

      <button
        type="button"
        className={`px-2 py-1 rounded-md mr-2 ${
          isBlockActive(editor, 'list-item')
            ? 'bg-blue-500 text-white'
            : 'bg-gray-300 text-gray-600'
        }`}
        onMouseDown={(event) => {
          event.preventDefault();
          toggleList(editor, 'numbered-list');
        }}
      >
        <IconListNumbers className="w-5 h-5" strokeWidth={2} />
      </button>

      <button
        type="button"
        className={`px-2 py-1 rounded-md mr-2 ${
          isBlockActive(editor, 'list-item')
            ? 'bg-blue-500 text-white'
            : 'bg-gray-300 text-gray-600'
        }`}
        onMouseDown={(event) => {
          event.preventDefault();
          toggleBlock(editor, 'bulleted-list');
        }}
      >
        <IconListCheck className="w-5 h-5" strokeWidth={2} />
      </button>

      <div className="border-l border-gray-400 mx-2 h-6"></div>

      <button
        type="button"
        className={`px-2 py-1 rounded-md mr-2 ${
          isAlignmentActive(editor, 'left')
            ? 'bg-blue-500 text-white'
            : 'bg-gray-300 text-gray-600'
        }`}
        onMouseDown={(event) => {
          event.preventDefault();
          toggleAlignment(editor, 'left');
        }}
      >
        <IconAlignLeft className="w-5 h-5" strokeWidth={2} />
      </button>

      <button
        type="button"
        className={`px-2 py-1 rounded-md mr-2 ${
          isAlignmentActive(editor, 'center')
            ? 'bg-blue-500 text-white'
            : 'bg-gray-300 text-gray-600'
        }`}
        onMouseDown={(event) => {
          event.preventDefault();
          toggleAlignment(editor, 'center');
        }}
      >
        <IconAlignCenter className="w-5 h-5" strokeWidth={2} />
      </button>

      <button
        type="button"
        className={`px-2 py-1 rounded-md mr-2 ${
          isAlignmentActive(editor, 'right')
            ? 'bg-blue-500 text-white'
            : 'bg-gray-300 text-gray-600'
        }`}
        onMouseDown={(event) => {
          event.preventDefault();
          toggleAlignment(editor, 'right');
        }}
      >
        <IconAlignRight className="w-5 h-5" strokeWidth={2} />
      </button>

      <button
        type="button"
        className={`px-2 py-1 rounded-md ${
          isAlignmentActive(editor, 'justify')
            ? 'bg-blue-500 text-white'
            : 'bg-gray-300 text-gray-600'
        }`}
        onMouseDown={(event) => {
          event.preventDefault();
          toggleAlignment(editor, 'justify');
        }}
      >
        <IconAlignJustified className="w-5 h-5" strokeWidth={2} />
      </button>

      <div className="border-l border-gray-400 mx-2 h-6"></div>

      <button
        type="button"
        className="px-2 py-1 rounded-md mr-2 bg-gray-300 text-gray-600"
        onClick={() => insertLink(editor)}
      >
        <IconLink className="w-5 h-5" strokeWidth={2} />
      </button>

      <button
        type="button"
        className="px-2 py-1 rounded-md mr-2 bg-gray-300 text-gray-600"
        onClick={() => insertImage(editor)}
      >
        <IconPhotoScan className="w-5 h-5" strokeWidth={2} />
      </button>

      <div className="border-l border-gray-400 mx-2 h-6"></div>

      <button
        type="button"
        className="px-2 py-1 rounded-md mr-2 bg-gray-300 text-gray-600"
        onClick={() => clearFormatting(editor)}
      >
        <IconX className="w-5 h-5" strokeWidth={2} />
      </button>
    </div>
  );
};

export default EditorToolbar;
