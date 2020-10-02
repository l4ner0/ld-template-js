export function updateStep({ commit }, payload) {
  commit("ui/UPDATE_STEP", payload, { root: true });
}

export function setModalText({ commit }, payload) {
  commit(
    "ui/SET_MODAL_TEXT",
    {
      ...payload
    },
    { root: true }
  );
}

export function setModalAlert({ commit }, payload) {
  commit(
    "ui/SET_MODAL_ALERT",
    {
      ...payload
    },
    { root: true }
  );
}

export async function resetModalText({ commit }) {
  commit(
    "ui/SET_MODAL_TEXT",
    {
      isModal: false,
      maxWidth: 450,
      titulo: "",
      texto: "",
      href: false,
      push: false
    },
    { root: true }
  );
}

export async function resetModalAlert({ commit }) {
  commit(
    "ui/SET_MODAL_ALERT",
    {
      imgModal: null,
      tituloModal: null,
      msgModal: null,
      maxWidth: 350,
      isModal: false,
      href: false,
      push: false
    },
    { root: true }
  );
}
