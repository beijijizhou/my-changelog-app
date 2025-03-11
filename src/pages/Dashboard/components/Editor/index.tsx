import ReactQuill from 'react-quill-new';
import { useEffect, useState } from 'react';
import './style.css'
const Editor = ({ initialContent }: { initialContent: string }) => {
  const [editorValue, setEditorValue] = useState<string>(initialContent);
  const handleChange = (value: string) => {
    setEditorValue(value);
  };

  useEffect(() => {
    setEditorValue(initialContent);
  }, [initialContent]);
  console.log(initialContent)
  return (
    <div>
      <h1>Commit Summary</h1>
      <ReactQuill
        value={editorValue}
        onChange={handleChange}
        modules={{
          toolbar: [
            [{ 'header': '1' }, { 'header': '2' }, { 'font': [] }],
            [{ 'list': 'ordered' }, { 'list': 'bullet' }],
            ['bold', 'italic', 'underline'],
            [{ 'align': [] }],
            ['link'],
            ['blockquote'],
            [{ 'color': [] }, { 'background': [] }],
            [{ 'script': 'sub' }, { 'script': 'super' }],
            ['image', 'code'],
            ['clean'] // add a button to clear the editor
          ],
        }}
      />
    </div>
  );
};

export default Editor;