import ReactQuill from 'react-quill-new';
import './style.css'
import useRepoStore from '../../repoStore';
const Editor = () => {
  const { selectedSummary, } = useRepoStore()
  const handleChange = (value: string) => {
    // setEditorValue(value);
  };

  function handlePublishClick(): void {
    console.log("Publish")
  }

  return (
    <div>
      <h1 className="text-xl font-bold mb-4">Commit Summary
        <button
          onClick={handlePublishClick}
          className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 ml-4"
        >
          Publish
        </button>
      </h1>

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