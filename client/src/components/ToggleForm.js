import SendIcon from '@material-ui/icons/Send';

function ToggleForm({ setShowForm }) {
  return (
    <div className="share-something">
      <div className="share" onClick={() => setShowForm(true)}>
        <h3>share something</h3>
        <SendIcon style={{ fontSize: 16 }} />
      </div>
    </div>
  );
}

export default ToggleForm;
