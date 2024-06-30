import React, { useState, useCallback } from 'react';
import { Slate, Editable, withReact, useSlate } from 'slate-react';
import { createEditor, Editor, Transforms, Text } from 'slate';
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
  IconDownload,
  IconEye,
  IconX,
} from '@tabler/icons-react';

const EditorComponent = () => {
  const [editor] = useState(() => withReact(createEditor()));
  const [value, setValue] = useState([
    {
      type: 'paragraph',
      children: [{ text: 'A line of text in a paragraph.' }],
    },
  ]);

  const toggleFormat = (format) => {
    const isActive = isFormatActive(format);

    Transforms.setNodes(
      editor,
      { [format]: isActive ? null : true },
      { match: Text.isText, split: true }
    );
  };

  const isFormatActive = (format) => {
    const [match] = Editor.nodes(editor, {
      match: (n) => n[format] === true,
      universal: true,
    });

    return !!match;
  };

  const toggleBlock = (format) => {
    const isActive = isBlockActive(format);

    Transforms.setNodes(
      editor,
      { type: isActive ? 'paragraph' : format },
      { match: (n) => Editor.isBlock(editor, n) }
    );
  };

  const isBlockActive = (format) => {
    const [match] = Editor.nodes(editor, {
      match: (n) => n.type === format,
    });

    return !!match;
  };

  const toggleList = () => {
    const isActive = isBlockActive('list-item');

    Transforms.unwrapNodes(editor, {
      match: (n) => n.type === 'list-item',
      split: true,
    });

    Transforms.setNodes(
      editor,
      { type: isActive ? 'paragraph' : 'list-item' },
      { match: (n) => Editor.isBlock(editor, n) }
    );
  };

  const toggleAlignment = (alignment) => {
    const isActive = isAlignmentActive(alignment);

    Transforms.setNodes(
      editor,
      { textAlign: isActive ? null : alignment },
      { match: (n) => Editor.isBlock(editor, n) }
    );
  };

  const isAlignmentActive = (alignment) => {
    const [match] = Editor.nodes(editor, {
      match: (n) => n.textAlign === alignment,
      universal: true,
    });

    return !!match;
  };

  const renderElement = useCallback((props) => {
    switch (props.element.type) {
      case 'heading-one':
        return <h1 {...props.attributes}>{props.children}</h1>;
      case 'heading-two':
        return <h2 {...props.attributes}>{props.children}</h2>;
      case 'list-item':
        return <li {...props.attributes}>{props.children}</li>;
      case 'block-quote':
        return <blockquote {...props.attributes}>{props.children}</blockquote>;
      case 'link':
        return (
          <a {...props.attributes} href={props.element.url}>
            {props.children}
          </a>
        );
      case 'image':
        return (
          <img
            {...props.attributes}
            src={props.element.url}
            alt={props.element.alt}
            className="max-w-full"
          />
        );
      default:
        return <p {...props.attributes}>{props.children}</p>;
    }
  }, []);

  const renderLeaf = useCallback((props) => {
    return <Leaf {...props} />;
  }, []);

  const Leaf = (props) => {
    let { leaf } = props;

    if (leaf.bold) {
      return <strong {...props.attributes}>{props.children}</strong>;
    }
    if (leaf.italic) {
      return <em {...props.attributes}>{props.children}</em>;
    }
    if (leaf.underline) {
      return <u {...props.attributes}>{props.children}</u>;
    }

    return <span {...props.attributes}>{props.children}</span>;
  };

  const insertLink = () => {
    const url = window.prompt('Enter the URL');
    if (!url) return;

    const text = window.prompt('Enter the link text');
    if (!text) return;

    const link = { type: 'link', url, children: [{ text }] };
    Transforms.insertNodes(editor, link);
  };

  const insertImage = () => {
    const url = window.prompt('Enter the URL of the image');
    if (!url) return;

    const alt = window.prompt('Enter the alt text for the image');
    if (!alt) return;

    const image = { type: 'image', url, alt };
    Transforms.insertNodes(editor, image);
  };

  const clearFormatting = () => {
    Transforms.unsetNodes(editor, ['bold', 'italic', 'underline'], {
      match: Text.isText,
      split: true,
    });
  };

  return (
    <div className="bg-gray-100 p-4 rounded-md">
      <div className="bg-gray-200 p-2 mb-2 rounded-md flex items-center">
        <button
          type="button"
          className={`px-2 py-1 rounded-md mr-2 ${
            isFormatActive('bold')
              ? 'bg-blue-500 text-white'
              : 'bg-gray-300 text-gray-600'
          }`}
          onMouseDown={(event) => {
            event.preventDefault();
            toggleFormat('bold');
          }}
        >
          <IconBold className="w-5 h-5" strokeWidth={2} />
        </button>
        <button
          type="button"
          className={`px-2 py-1 rounded-md mr-2 ${
            isFormatActive('italic')
              ? 'bg-blue-500 text-white'
              : 'bg-gray-300 text-gray-600'
          }`}
          onMouseDown={(event) => {
            event.preventDefault();
            toggleFormat('italic');
          }}
        >
          <IconItalic className="w-5 h-5" strokeWidth={2} />
        </button>
        <button
          type="button"
          className={`px-2 py-1 rounded-md mr-2 ${
            isFormatActive('underline')
              ? 'bg-blue-500 text-white'
              : 'bg-gray-300 text-gray-600'
          }`}
          onMouseDown={(event) => {
            event.preventDefault();
            toggleFormat('underline');
          }}
        >
          <IconUnderline className="w-5 h-5" strokeWidth={2} />
        </button>
        <div className="border-l border-gray-400 mx-2 h-6"></div>
        <button
          type="button"
          className={`px-2 py-1 rounded-md mr-2 ${
            isBlockActive('heading-one') || isBlockActive('heading-two')
              ? 'bg-blue-500 text-white'
              : 'bg-gray-300 text-gray-600'
          }`}
          onMouseDown={(event) => {
            event.preventDefault();
            toggleBlock(isBlockActive('heading-one') ? 'paragraph' : 'heading-one');
          }}
        >
          H1
        </button>
        <button
          type="button"
          className={`px-2 py-1 rounded-md mr-2 ${
            isBlockActive('heading-two') || isBlockActive('heading-one')
              ? 'bg-blue-500 text-white'
              : 'bg-gray-300 text-gray-600'
          }`}
          onMouseDown={(event) => {
            event.preventDefault();
            toggleBlock(isBlockActive('heading-two') ? 'paragraph' : 'heading-two');
          }}
        >
          H2
        </button>
        <button
          type="button"
          className={`px-2 py-1 rounded-md mr-2 ${
            isBlockActive('list-item')
              ? 'bg-blue-500 text-white'
              : 'bg-gray-300 text-gray-600'
          }`}
          onMouseDown={(event) => {
            event.preventDefault();
            toggleList();
          }}
        >
          <IconListNumbers className="w-5 h-5" strokeWidth={2} />
        </button>
        <button
          type="button"
          className={`px-2 py-1 rounded-md mr-2 ${
            isBlockActive('list-item')
              ? 'bg-blue-500 text-white'
              : 'bg-gray-300 text-gray-600'
          }`}
          onMouseDown={(event) => {
            event.preventDefault();
            toggleBlock(isBlockActive('list-item') ? 'paragraph' : 'list-item');
          }}
        >
          <IconListCheck className="w-5 h-5" strokeWidth={2} />
        </button>
        <div className="border-l border-gray-400 mx-2 h-6"></div>
        <button
          type="button"
          className={`px-2 py-1 rounded-md mr-2 ${
            isAlignmentActive('left')
              ? 'bg-blue-500 text-white'
              : 'bg-gray-300 text-gray-600'
          }`}
          onMouseDown={(event) => {
            event.preventDefault();
            toggleAlignment('left');
          }}
        >
          <IconAlignLeft className="w-5 h-5" strokeWidth={2} />
        </button>
        <button
          type="button"
          className={`px-2 py-1 rounded-md mr-2 ${
            isAlignmentActive('center')
              ? 'bg-blue-500 text-white'
              : 'bg-gray-300 text-gray-600'
          }`}
          onMouseDown={(event) => {
            event.preventDefault();
            toggleAlignment('center');
          }}
        >
          <IconAlignCenter className="w-5 h-5" strokeWidth={2} />
        </button>
        <button
          type="button"
          className={`px-2 py-1 rounded-md mr-2 ${
            isAlignmentActive('right')
              ? 'bg-blue-500 text-white'
              : 'bg-gray-300 text-gray-600'
          }`}
          onMouseDown={(event) => {
            event.preventDefault();
            toggleAlignment('right');
          }}
        >
          <IconAlignRight className="w-5 h-5" strokeWidth={2} />
        </button>
        <button
          type="button"
          className={`px-2 py-1 rounded-md ${
            isAlignmentActive('justify')
              ? 'bg-blue-500 text-white'
              : 'bg-gray-300 text-gray-600'
          }`}
          onMouseDown={(event) => {
            event.preventDefault();
            toggleAlignment('justify');
          }}
        >
          <IconAlignJustified className="w-5 h-5" strokeWidth={2} />
        </button>
        <div className="border-l border-gray-400 mx-2 h-6"></div>
        <button
          type="button"
          className="px-2 py-1 rounded-md mr-2 bg-gray-300 text-gray-600"
          onClick={() => insertLink()}
        >
          <IconLink className="w-5 h-5" strokeWidth={2} />
        </button>
        <button
          type="button"
          className="px-2 py-1 rounded-md mr-2 bg-gray-300 text-gray-600"
          onClick={() => insertImage()}
        >
          <IconPhotoScan className="w-5 h-5" strokeWidth={2} />
        </button>
        <div className="border-l border-gray-400 mx-2 h-6"></div>
        <button
          type="button"
          className="px-2 py-1 rounded-md mr-2 bg-gray-300 text-gray-600"
          onClick={() => clearFormatting()}
        >
          <IconX className="w-5 h-5" strokeWidth={2} />
        </button>
        <div className="border-l border-gray-400 mx-2 h-6"></div>
        <button
          type="button"
          className="px-2 py-1 rounded-md mr-2 bg-gray-300 text-gray-600"
          onClick={() => alert('Save function not implemented')}
        >
          <IconDownload className="w-5 h-5" strokeWidth={2} />
        </button>
        <button
          type="button"
          className="px-2 py-1 rounded-md bg-gray-300 text-gray-600"
          onClick={() => alert('Preview function not implemented')}
        >
          <IconEye className="w-5 h-5" strokeWidth={2} />
        </button>
      </div>
      <Slate editor={editor} initialValue={value} onChange={(newValue) => setValue(newValue)}>
        <Editable
          className="bg-white p-2 rounded-md"
          renderElement={renderElement}
          renderLeaf={renderLeaf}
          onKeyDown={(event) => {
            if (!event.ctrlKey) return;

            switch (event.key) {
              case 'b': {
                event.preventDefault();
                toggleFormat('bold');
                break;
              }
              case 'i': {
                event.preventDefault();
                toggleFormat('italic');
                break;
              }
              case 'u': {
                event.preventDefault();
                toggleFormat('underline');
                break;
              }
            }
          }}
        />
      </Slate>
    </div>
  );
};

export default EditorComponent;
