
import {useLexicalComposerContext} from '@lexical/react/LexicalComposerContext';
import {mergeRegister} from '@lexical/utils';
import {
  $getSelection,
  $isRangeSelection,
  FORMAT_ELEMENT_COMMAND,
  FORMAT_TEXT_COMMAND,
  SELECTION_CHANGE_COMMAND,
} from 'lexical';
import { AlignCenter, AlignLeft, AlignRight, Bold, Italic, Strikethrough, Underline } from 'lucide-react';
import {useCallback, useEffect, useRef, useState} from 'react';

const LowPriority = 1;



export default function ToolbarPlugin() {
  const [editor] = useLexicalComposerContext();
  const toolbarRef = useRef(null);
  const [isBold, setIsBold] = useState(false);
  const [isItalic, setIsItalic] = useState(false);
  const [isUnderline, setIsUnderline] = useState(false);
  const [isStrikethrough, setIsStrikethrough] = useState(false);

  const $updateToolbar = useCallback(() => {
    const selection = $getSelection();
    if ($isRangeSelection(selection)) {
      // Update text format
      setIsBold(selection.hasFormat('bold'));
      setIsItalic(selection.hasFormat('italic'));
      setIsUnderline(selection.hasFormat('underline'));
      setIsStrikethrough(selection.hasFormat('strikethrough'));
    }
  }, []);

  useEffect(() => {
    return mergeRegister(
      editor.registerUpdateListener(({editorState}) => {
        editorState.read(() => {
          $updateToolbar();
        });
      }),
      editor.registerCommand(
        SELECTION_CHANGE_COMMAND,
        (_payload, _newEditor) => {
          $updateToolbar();
          return false;
        },
        LowPriority,
      ),
      
    );
  }, [editor, $updateToolbar]);

  return (
    <div className="flex mb-0.5 bg-white p-2 rounded-sm gap-4 items-center rounded-t-xl " ref={toolbarRef}>
      
      <button
        onClick={() => {
          editor.dispatchCommand(FORMAT_TEXT_COMMAND, 'bold');
        }}
        className={'p-1 ' + (isBold ? 'bg-primary rounded-lg ' : '')}
        aria-label="Format Bold">
        <Bold className={'w-5 h-5 '+(isBold ? 'stroke-white' : '')}/>
      </button>
      <button
        onClick={() => {
          editor.dispatchCommand(FORMAT_TEXT_COMMAND, 'italic');
        }}
        className={ 'p-1 ' + (isItalic ? 'bg-primary rounded-lg ' : '')}
        aria-label="Format Italics">
        <Italic className={'w-5 h-5 '+(isItalic ? 'stroke-white' : '')}/>
      </button>
      <button
        onClick={() => {
          editor.dispatchCommand(FORMAT_TEXT_COMMAND, 'underline');
        }}
        className={'p-1 ' + (isUnderline ? 'bg-primary rounded-lg ' : '')}
        aria-label="Format Underline">
        <Underline className={'w-5 h-5 '+(isUnderline ? 'stroke-white' : '')}/>
      </button>
      <button
        onClick={() => {
          editor.dispatchCommand(FORMAT_TEXT_COMMAND, 'strikethrough');
        }}
        className={'p-1 ' + (isStrikethrough ? 'bg-primary rounded-lg ' : '')}
        aria-label="Format Underline">
        <Strikethrough className={'w-5 h-5 '+(isStrikethrough ? 'stroke-white' : '')}/>
      </button>
      
      <button
        onClick={() => {
          editor.dispatchCommand(FORMAT_ELEMENT_COMMAND, 'left');
        }}
       
        aria-label="Left Align">
        <AlignLeft className='w-5 h-5'/>
      </button>
      <button
        onClick={() => {
          editor.dispatchCommand(FORMAT_ELEMENT_COMMAND, 'center');
        }}
        aria-label="Center Align">
        <AlignCenter className='w-5 h-5'/>
      </button>
      <button
        onClick={() => {
          editor.dispatchCommand(FORMAT_ELEMENT_COMMAND, 'right');
        }}
        aria-label="Right Align">
        <AlignRight className='w-5 h-5' />
      </button>
      {' '}
    </div>
  );
}
