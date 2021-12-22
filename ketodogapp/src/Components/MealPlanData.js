import React from "react";

function MealPlandata(props) {
  const { data } = props;
  console.log(data);

  if (data.length <= 0) {
    return null;
  }

  return (
    <div>
      {[data].map((element, index) => {
        return (
          <div key={index}>
            <p>{element.weight}</p>
            <p>calories:{element.calories}</p>
            <p>
              {element.fats[0].amount} grams {element.fats[0].fat.fat}
            </p>
            <p>
              {element.proteins[0].amount} grams{" "}
              {element.proteins[0].protein.protein}
            </p>
            <p>
              {element.proteins[1].amount} grams{" "}
              {element.proteins[1].protein.protein}
            </p>
            <p>
              {element.proteins[2].amount} grams{" "}
              {element.proteins[2].protein.protein}
            </p>
            <p>
              {element.proteins[3].amount} grams{" "}
              {element.proteins[3].protein.protein}
            </p>
            <p>
              {element.supplements[0].amount} grams{" "}
              {element.supplements[0].supplement.supplement}
            </p>
            <p>
              {element.supplements[1].amount} grams{" "}
              {element.supplements[1].supplement.supplement}
            </p>
            <p>
              {element.supplements[2].amount} grams{" "}
              {element.supplements[2].supplement.supplement}
            </p>
            <p>
              {element.supplements[3].amount} grams{" "}
              {element.supplements[3].supplement.supplement}
            </p>
            <p>
              {element.supplements[4].amount} grams{" "}
              {element.supplements[4].supplement.supplement}
            </p>
            <p>
              {element.supplements[5].amount} grams{" "}
              {element.supplements[5].supplement.supplement}
            </p>
            <p>
              {element.supplements[6].amount} grams{" "}
              {element.supplements[6].supplement.supplement}
            </p>
            <p>
              {element.supplements[7].amount} grams{" "}
              {element.supplements[7].supplement.supplement}
            </p>
            <p>
              {element.vegetables[0].amount} grams{" "}
              {element.vegetables[0].vegetable.vegetable}
            </p>
            <p>
              {element.vegetables[1].amount} grams{" "}
              {element.vegetables[1].vegetable.vegetable}
            </p>
          </div>
        );
      })}
    </div>
  );
}

export default MealPlandata;
