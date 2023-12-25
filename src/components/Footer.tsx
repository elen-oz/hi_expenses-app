const Footer = () => {
  return (
    <footer className='footer mt-auto py-2 bg-light'>
      <div className='text-center'>
        made by{' '}
        <a
          href='https://github.com/elen-oz'
          target='_blank'
          className='link-secondary'
        >
          elen-oz
        </a>
        &nbsp;&nbsp;
        <a
          href='https://github.com/elen-oz/hi_expenses-app'
          target='_blank'
          className='link-success'
        >
          source code
        </a>
      </div>
    </footer>
  );
};
export default Footer;
