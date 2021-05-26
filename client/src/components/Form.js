import SendIcon from '@material-ui/icons/Send';
import HighlightOffIcon from '@material-ui/icons/HighlightOff';
import CircularProgress from '@material-ui/core/CircularProgress';

function Form(props) {
  const maxChar = props.post.length;

  return (
    <form spellCheck="false" onSubmit={props.submit}>
      <HighlightOffIcon
        className="close"
        onClick={() => props.setShowForm(false)}
      />
      <div className="input">
        <label>username</label> <br />
        <input
          maxLength="20"
          type="text"
          placeholder="leave empty for anonymous"
          value={props.username}
          onChange={(e) => props.setUsername(e.target.value)}
        />
      </div>

      <div className="input">
        <label>share mo lang</label> <br />
        <textarea
          maxLength="200"
          value={props.post}
          onChange={(e) => props.setPost(e.target.value)}
        ></textarea>
        <div
          className="max-char"
          style={{ color: maxChar == 200 && '#ED1D24' }}
        >
          {maxChar}/200
        </div>
      </div>

      <div className="send">
        {props.sharing ? (
          <CircularProgress className="submit-loader" />
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
