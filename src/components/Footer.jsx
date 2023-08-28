function DefaultFooter() {
  const year = new Date().getFullYear();
  return (
    <div class="footer">
      <footer>{`Copyright © ${year}`}</footer>
    </div>
  );
}

export default DefaultFooter;
