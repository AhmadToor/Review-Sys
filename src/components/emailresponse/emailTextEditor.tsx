import React, { useEffect, useRef } from 'react';
import { LexicalComposer } from '@lexical/react/LexicalComposer';
import { ContentEditable } from '@lexical/react/LexicalContentEditable';
import { LexicalErrorBoundary } from '@lexical/react/LexicalErrorBoundary';
import { RichTextPlugin } from '@lexical/react/LexicalRichTextPlugin';
import {
  $createParagraphNode,
  $createTextNode,
  $getRoot,
  ParagraphNode,
  TextNode,
  LexicalEditor,
} from 'lexical';

import EditorTheme from './EditorTheme';
import ToolbarPlugin from './ToolbarPlugin';

const placeholder = 'Enter some rich text...';

function DefaultEditorValue(editor: LexicalEditor, initialValue: string) {
  editor.update(() => {
    const root = $getRoot();
    root.clear(); 

   
    const paragraphs = initialValue.split(/\n\s*\n/);

    paragraphs.forEach((paragraphText) => {
      const paragraph = $createParagraphNode();
      const textNodes = paragraphText.split('\n').map((text) => $createTextNode(text));
      paragraph.append(...textNodes);
      root.append(paragraph);
    });
  });
}

const editorConfig = {
  editorState: (editor: LexicalEditor) => {
    DefaultEditorValue(editor, ""); 
  },
  namespace: 'Email Editor',
  nodes: [ParagraphNode, TextNode],
  onError(error: Error) {
    throw error;
  },
  theme: EditorTheme,
};

interface EmailTextEditorProps extends React.HTMLProps<HTMLDivElement> {
  children: string;
}

export default function EmailTextEditor({ children, ...props }: EmailTextEditorProps) {
  const editorRef = useRef<LexicalEditor | null>(null);

 
  const editorStateInitializer = (editor: LexicalEditor) => {
    editorRef.current = editor;
    DefaultEditorValue(editor, children); 
  };

  useEffect(() => {
    if (editorRef.current) {
      editorRef.current.update(() => {
        DefaultEditorValue(editorRef.current as LexicalEditor, children); 
      });
    }
  }, [children]);
  return (
    <LexicalComposer initialConfig={{ ...editorConfig, editorState: editorStateInitializer }}>
      <div className="editor-container" {...props}>
        <ToolbarPlugin />
        <div className="editor-inner rounded-b-xl">
          <RichTextPlugin
            contentEditable={
              <ContentEditable
                className="editor-input text-sm"
                aria-placeholder={placeholder}
                placeholder={
                  <div className="editor-placeholder">{placeholder}</div>
                }
              />
            }
            ErrorBoundary={LexicalErrorBoundary}
          />
        </div>
      </div>
    </LexicalComposer>
  );
}