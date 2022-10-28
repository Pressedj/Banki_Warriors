const deleteBtnTechnical = document.querySelectorAll(".del");
const deleteBtnBehavioral = document.querySelectorAll(".del");
const editBtnTechnical = document.querySelectorAll(".edit");
Array.from(deleteBtnTechnical).forEach((el) =>
  el.addEventListener("click", deleteTechnicalQuestion)
);
Array.from(deleteBtnBehavioral).forEach((el) =>
  el.addEventListener("click", deleteBehavioralQuestion)
);
Array.from(editBtnTechnical).forEach((el) =>
  el.addEventListener("click", editTechnicalQuestion)
);

async function deleteTechnicalQuestion() {
  const tecnhicalQId = this.parentNode.dataset.id;
  try {
    const response = await fetch("technical/deleteTechnicalQuestion", {
      method: "delete",
      headers: { "Content-type": "application/json" },
      body: JSON.stringify({
        technicalQuestionIdFromJSFile: tecnhicalQId,
      }),
    });
    const data = await response.json();
    console.log(data);
    location.reload();
  } catch (err) {
    console.log(err);
  }
}
async function deleteBehavioralQuestion() {
  const behavioralQId = this.parentNode.dataset.id;
  try {
    const response = await fetch("behavioral/deleteBehavioralQuestion", {
      method: "delete",
      headers: { "Content-type": "application/json" },
      body: JSON.stringify({
        behavioralQuestionIdFromJSFile: behavioralQId,
      }),
    });
    const data = await response.json();
    console.log(data);
    location.reload();
  } catch (err) {
    console.log(err);
  }
}
async function editTechnicalQuestion() {
  console.log("edit");
}
