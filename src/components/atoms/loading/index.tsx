interface Props {}

export const Loading: React.FC<Props> = () => {
  return (
    <div className="" aria-label="読み込み中">
      <div className="h-10 w-10 animate-spin rounded-full border-2 border-orange-500 border-t-transparent"></div>
    </div>
  );
};
