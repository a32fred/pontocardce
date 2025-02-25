export const DemoToggleButton = ({
    isActive,
    onClick,
  }: {
    isActive: boolean;
    onClick: () => void;
  }) => (
    <button
      onClick={onClick}
      className="mt-8 bg-white text-green-900 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-all"
    >
      {isActive ? "Parar Demonstração" : "Iniciar Demonstração"}
    </button>
  );