import { motion } from 'framer-motion';
import SendIcon from '@material-ui/icons/Send';

function ToggleForm({ setShowForm, showForm }) {
  return (
    <>
      {!showForm && (
        <motion.div whileHover={{ x: '10px' }} className="share-something">
          <div className="share" onClick={() => setShowForm(true)}>
            <h3>share something</h3>
            <SendIcon style={{ fontSize: 16 }} />
          </div>
        </motion.div>
      )}
    </>
  );
}

export default ToggleForm;
