import ReactQuill from 'react-quill-new';
import './style.css'
import useRepoStore from '../../repoStore';
const Editor = () => {
  const { selectedSummary, } = useRepoStore()
  const handleChange = (value: string) => {
    // setEditorValue(value);
  };

  return (
    <div>
      <h1>Commit Summary</h1>
      <ReactQuill
        value={selectedSummary}
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