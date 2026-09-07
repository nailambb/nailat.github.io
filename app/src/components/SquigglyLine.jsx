// SquigglyLine.jsx
const SquigglyLine = () => (
    <svg
      viewBox="0 0 1000 40"
      preserveAspectRatio="none"
      style={{
        position: 'absolute',
        width: '100%',
        height: '40px',
        top: '-20px', // Adjust to overflow the section above
        left: 0,
        zIndex: 10,
        overflow: 'visible', // Critical for overflow
      }}
    >
      <path
        d="M0,20 Q50,0 100,20 T200,20 T300,20 T400,20 T500,20 T600,20 T700,20 T800,20 T900,20 T1000,20"
        stroke="#5C4033"
        strokeWidth="100"
        fill="none"
        strokeLinecap="round"
      />
    </svg>
  );

  export default SquigglyLine;