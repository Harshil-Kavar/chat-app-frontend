import moment from "moment";

export const FileFormat = (url: string) => {
  const fileEXE = url.split(".").pop();
  if (
    fileEXE?.toLowerCase() === "mp4" ||
    fileEXE?.toLowerCase() === "webm" ||
    fileEXE?.toLowerCase() === "ogg"
  ) {
    return "video";
  }
  if (fileEXE?.toLowerCase() === "mp3" || fileEXE?.toLowerCase() === "wav") {
    return "audio";
  }
  if (
    fileEXE?.toLowerCase() === "png" ||
    fileEXE?.toLowerCase() === "jpg" ||
    fileEXE?.toLowerCase() === "jpeg" ||
    fileEXE?.toLowerCase() === "gif"
  ) {
    return "image";
  }
  return "file";
};

export const transformImage = (url: string, width: number = 100) => {
  return url;
};

export const getLast7Days = () => {
  const currentDate = moment();
  const last7Days = [];
  for (let i = 0; i < 7; i++) {
    last7Days.unshift(currentDate.format("MMM D"));
    currentDate.subtract(1, "days");
  }
  return last7Days;
};
