import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { SKILL_FILTER_OPTION } from "@/lib/ontions";

type Props = {
  onChange: (value: string) => void;
  defaultValue?: string;
};

export const FileterSelect: React.FC<Props> = ({
  onChange,
  defaultValue = "0",
}) => {
  const handleSelectChange = (value: string) => {
    onChange(value);
  };
  return (
    <Select defaultValue={defaultValue} onValueChange={handleSelectChange}>
      <SelectTrigger className="w-[180px]">
        <SelectValue placeholder="すべて" />
      </SelectTrigger>
      <SelectContent>
        {SKILL_FILTER_OPTION.map((option) => (
          <SelectItem key={option.value} value={option.value}>
            {option.label}
          </SelectItem>
        ))}
      </SelectContent>
    </Select>
  );
};
