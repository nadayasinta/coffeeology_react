import store from "./store";
import axios from "axios";
import Swal from "sweetalert2";

const Toast = Swal.mixin({
  toast: true,
  position: "center",
  showConfirmButton: false,
  timer: 2000
});

const actionsTimer = store => ({
  // setter data
  setTimer(state, value) {
    if (value === 0) {
      console.log("nambah");
      return { stepIndex: store.getState().stepIndex + 1 };
    }
    return { timerNow: value };
  },
  setStepIndex(state, value) {
    console.log("sett");
    return { stepIndex: value };
  },
  setWaterNow(state, value) {
    return { waterNow: value };
  },
  setStepWater(state, value) {
    return { stepWater: value };
  },
  setStepTime(state, value) {
    return { stepTime: value };
  },
  setWaterLimit(state, value) {
    return { waterLimit: value };
  }
});

export default actionsTimer;
