function Time() {
  let time = new Date();

  return (
    <div>
      Txhe Time in India : {time.toLocaleDateString()} -
      {time.toLocaleTimeString()}
    </div>
  );
}

export default Time;
