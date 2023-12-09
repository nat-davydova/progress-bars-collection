const PROGRESS_CLASSNAME = "progress";

// PROGRESS BARS INDEPENDENT INITS

setProgressBars({
  parentSelector: ".example-1",
  className: "example-1__progress",
});

setProgressBars({
  parentSelector: ".example-2",
  className: "example-2__progress",
});

setProgressBars({
  parentSelector: ".example-3",
  className: "example-3__progress",
});

setProgressBars({
  parentSelector: ".example-4",
  className: "example-4__progress",
});

// PROGRESS BARS BUILDER FUNCTIONS
function setProgressBars({ parentSelector, className }) {
  const progressWrapper = document.querySelector(`${parentSelector}`);

  if (!progressWrapper) {
    throw new Error("skillsWrapper not found");
  }

  const progressBars = progressWrapper.querySelectorAll("progress");

  if (!progressBars) {
    return;
  }

  progressBars.forEach((progressBar) => {
    const max = progressBar.getAttribute("max");
    const value = progressBar.getAttribute("value");
    const title = progressBar.getAttribute("data-title");
    const customProgress = createCustomProgressBar({
      max,
      value,
      className,
      title,
    });
    const progressParent = progressBar.parentElement;
    progressParent?.appendChild(customProgress);
  });
}

function createProgressElem(className) {
  const progress = document.createElement("div");
  progress.classList.add(`${PROGRESS_CLASSNAME}`);

  if (className) {
    progress.classList.add(className);
  }

  return progress;
}

function createProgressBarElem(progressValue) {
  const reformattedProgressValue = progressValue.toString();

  const progressBar = document.createElement("div");
  progressBar.classList.add(`${PROGRESS_CLASSNAME}__bar`);
  progressBar.setAttribute("data-progress-value", reformattedProgressValue);

  const progressBarInner = document.createElement("div");
  progressBarInner.classList.add(`${PROGRESS_CLASSNAME}__bar-inner`);
  progressBarInner.style.width = `${reformattedProgressValue}%`;

  progressBar.appendChild(progressBarInner);

  return progressBar;
}

function createProgressPercentageElem(progressValue) {
  const progressPercentage = document.createElement("span");
  progressPercentage.classList.add(`${PROGRESS_CLASSNAME}__percentage`);
  progressPercentage.textContent = `${progressValue}%`;

  return progressPercentage;
}

function createProgressTitleElem(title) {
  const progressTitle = document.createElement("span");
  progressTitle.classList.add(`${PROGRESS_CLASSNAME}__title`);
  progressTitle.textContent = title;

  return progressTitle;
}

function createCustomProgressBar({ max, value, className, title }) {
  if (value === null || Number.isNaN(Number(value)) || !Number(max)) {
    throw new Error("Progress max or value is not a number");
  }

  if (!title) {
    throw new Error("Progress title doesn't exist");
  }

  const progressValue = Math.round((Number(value) / Number(max)) * 100);

  const progress = createProgressElem(`${className}`);
  const progressBar = createProgressBarElem(progressValue);
  const progressPercentage = createProgressPercentageElem(progressValue);
  const progressTitle = createProgressTitleElem(title);

  progress.appendChild(progressTitle);
  progress.appendChild(progressPercentage);
  progress.appendChild(progressBar);

  return progress;
}
