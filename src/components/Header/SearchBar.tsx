import React from "react";
import { InputAdornment, TextField } from "@mui/material";
import { IoIosSearch } from "react-icons/io";

const SearchBar = () => {
  return (
    <React.Fragment>
      <TextField
        placeholder="Ürün, kategori veya ilan ara"
        variant="filled"
        fullWidth
        slotProps={{
          input: {
            endAdornment: (
              <InputAdornment position="end">
                <IoIosSearch />
              </InputAdornment>
            ),
          },
        }}
      />
    </React.Fragment>
  );
};

export default SearchBar;
