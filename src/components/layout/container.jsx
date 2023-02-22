function container({ children, className }) {
  const classes = `max-w-7xl mx-auto px-4 lg:px-8 relative ${className}`;
  return <div className={classes}>{children}</div>;
}

export default container;
