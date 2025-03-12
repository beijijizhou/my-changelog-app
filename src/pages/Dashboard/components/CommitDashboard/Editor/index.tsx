import ReactQuill from 'react-quill-new';
import useRepoStore from '../../../repoStore';
import PublishButton from './PublishButton';

const Editor = () => {
  const { selectedSummary, setSelectedSummary } = useRepoStore();
  const handleEditorChange = (value: string) => {
    setSelectedSummary(value);
  };
  return (
    <div>
      <h1 className="text-xl font-bold mb-4">
        Commit Summary
        <PublishButton />
      </h1>
      <ReactQuill
        value={selectedSummary}
        onChange={handleEditorChange}
        modules={{
          toolbar: [
            [{ header: '1' }, { header: '2' }, { font: [] }],
            [{ list: 'ordered' }, { list: 'bullet' }],
            ['bold', 'italic', 'underline'],
            [{ align: [] }],
            ['link'],
            ['blockquote'],
            [{ color: [] }, { background: [] }],
            [{ script: 'sub' }, { script: 'super' }],
            ['image', 'code'],
            ['clean'],
          ],
        }}
      />
    </div>
  );
};

export default Editor;