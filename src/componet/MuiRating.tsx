import { Favorite, FavoriteBorder } from "@mui/icons-material";
import { Rating, Stack } from "@mui/material";
import { useState } from "react";

export const MuiRating = () => {
  const [val, setVal] = useState<number | null>(null);

  console.log(val);

  const handleChange = (e: React.ChangeEvent<{}>, newValue: number | null) => {
    setVal(newValue);
  };
  return (
    <Stack spacing={2}>
      <Rating
        value={val}
        onChange={handleChange}
        precision={0.5}
        size="large"
        icon={<Favorite fontSize='inherit' color='error'/>}
        emptyIcon={<FavoriteBorder fontSize='inherit'/>}
        // readOnly
        highlightSelectedOnly
      />
    </Stack>
  );
};
