import { motion, AnimatePresence } from 'framer-motion';
import SendIcon from '@material-ui/icons/Send';

function ToggleForm({ setShowForm, showForm }) {
  return (
    <AnimatePresence>
      {!showForm && (
        <div className="share-something">
          <div className="share" onClick={() => setShowForm(true)}>
            <h3>share something</h3>
            <SendIcon style={{ fontSize: 16 }} />
          </div>
        </div>
      )}
    </AnimatePresence>
  );
}

export default ToggleForm;
