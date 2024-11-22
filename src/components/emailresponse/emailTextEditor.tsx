import {LexicalComposer} from '@lexical/react/LexicalComposer';
import {ContentEditable} from '@lexical/react/LexicalContentEditable';
import {LexicalErrorBoundary} from '@lexical/react/LexicalErrorBoundary';
import {RichTextPlugin} from '@lexical/react/LexicalRichTextPlugin';
import {
  $createParagraphNode,
  $createTextNode,
  $getRoot,
  ParagraphNode,
  TextNode,
} from 'lexical';

import EditorTheme from './EditorTheme';
import ToolbarPlugin from './ToolbarPlugin';

const placeholder = 'Enter some rich text...';



function DefaultEditorValue() {
    const root = $getRoot();
    if (root.getFirstChild() === null) {
      const paragraph = $createParagraphNode();
      paragraph.append(
        $createTextNode("Hi Laoshe👋\n\n"),
        $createTextNode("We have an exciting update for you: there are now no fewer than 3 brand new places ready to rent in Lahore.\n\n"),
        $createTextNode("Are you curious about the available rental options in Lahore?\n\n"),
        $createTextNode("Interesting options have recently been added that seamlessly meet your wishes for your new stay. Do you see something that appeals to you? You have the option to arrange a viewing directly via the website or ask questions about the place in question. It’s now easier than ever to take your next step towards your ideal home.\n\n"),
        $createTextNode("Maan jao na yawr.\nThanks")
      );
      root.append(paragraph);
    }
  }
const editorConfig = {
   
    editorState : DefaultEditorValue,
    namespace: 'Email Editor',
    nodes: [ParagraphNode, TextNode],
    onError(error: Error) {
      throw error;
    },
    theme: EditorTheme,
  };

export default function EmailTextEditor() {
  return (
    <LexicalComposer initialConfig={editorConfig}>
      <div className="editor-container">
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