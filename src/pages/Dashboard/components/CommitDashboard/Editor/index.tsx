import ReactQuill from 'react-quill-new';
import useRepoStore from '../../../repoStore';
import SaveButton from './SaveButton';
import CancelButton from './CancelButton';
import AISummaryButton from './AISummaryButton';

const Editor = () => {
  const { selectedSummary, setSelectedSummary } = useRepoStore();
  const handleEditorChange = (value: string) => {
    setSelectedSummary(value);
  };
  return (
    <div>
      <div className="flex justify-between items-center min-h-[48px] mb-4">
        <h1 className="text-2xl font-bold">Changelog Summary</h1>
        <AISummaryButton />
      </div>
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
      <div className="flex justify-end space-x-4 mt-8 mb-8">
        <CancelButton />
        <SaveButton />
      </div>


    </div>
  );
};

export default Editor;