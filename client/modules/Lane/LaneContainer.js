import { connect } from 'react-redux';
import Lane from './Lane';
import {
  createLaneRequest,
  editLane,
  deleteLaneRequest,
  updateLaneRequest,
  // moveBetweenLanes,
  // removeFromLane,
  // pushToLane,
  // changeLanesRequest,
 } from './LaneActions';
import { createNoteRequest } from '../Note/NoteActions';
// import callApi from '../../util/apiCaller';

const mapStateToProps = (state, ownProps) => ({
  laneNotes: ownProps.lane.notes.map(noteId => state.notes[noteId]),
});

const mapDispatchToProps = {
  editLane,
  deleteLane: deleteLaneRequest,
  updateLane: updateLaneRequest,
  addNote: createNoteRequest,
  createLane: createLaneRequest,
};


export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Lane);
