import SendIcon from '@material-ui/icons/Send';
import HighlightOffIcon from '@material-ui/icons/HighlightOff';

function Form({ setShowForm }) {
  return (
    <form spellCheck="false">
      <HighlightOffIcon onClick={() => setShowForm(false)} />
      <div className="input">
        <label>username</label> <br />
        <input type="text" placeholder="leave empty for anonymous" />
      </div>

      <div className="input">
        <label>share mo lang</label> <br />
        <textarea></textarea>
      </div>

      <div className="send">
        <div className="submit">
          <input type="submit" value="share" />
          <SendIcon style={{ fontSize: 15 }} />
        </div>
      </div>
    </form>
  );
}

export default Form;
