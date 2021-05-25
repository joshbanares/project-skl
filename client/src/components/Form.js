import SendIcon from '@material-ui/icons/Send';
import HighlightOffIcon from '@material-ui/icons/HighlightOff';

function Form({
  setShowForm,
  setUsername,
  setPost,
  username,
  post,
  submit,
  sharing,
  setSharing,
}) {
  return (
    <form spellCheck="false" onSubmit={submit}>
      <HighlightOffIcon onClick={() => setShowForm(false)} />
      <div className="input">
        <label>username</label> <br />
        <input
          type="text"
          placeholder="leave empty for anonymous"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
      </div>

      <div className="input">
        <label>share mo lang</label> <br />
        <textarea
          value={post}
          onChange={(e) => setPost(e.target.value)}
        ></textarea>
      </div>

      <div className="send">
        {sharing ? (
          <div className="sharing">sharing post...</div>
        ) : (
          <div className="submit">
            <input type="submit" value="share" />
            <SendIcon style={{ fontSize: 15 }} />
          </div>
        )}
      </div>
    </form>
  );
}

export default Form;
