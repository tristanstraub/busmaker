(ns busmaker.template)

(def template
  {:bus-outputs
   {"coal" 0,
    "iron-ore" 1,
    "iron-plate" 2,
    "copper-ore" 3,
    "copper-plate" 4,
    "iron-gear-wheel" 5,
    "transport-belt" 6,
    "underground-belt" 7},
   :recipe "underground-belt",
   :products
   ["coal"
    "iron-ore"
    "iron-plate"
    "copper-ore"
    "copper-plate"
    "iron-gear-wheel"
    "transport-belt"
    "underground-belt"],
   :factories
   {"iron-plate" {:n 5, :facility "stone-furnace"},
    "copper-plate" {:n 5, :facility "stone-furnace"},
    "iron-gear-wheel" {:n 1, :facility "assembling-machine-1"},
    "transport-belt" {:n 1, :facility "assembling-machine-1"},
    "underground-belt" {:n 1, :facility "assembling-machine-1"}},
   :recipe-names
   #{"transport-belt" "copper-plate" "iron-plate"
     "underground-belt"},
   :others nil,
   :entity
   {"direction" 2,
    "name" "transport-belt",
    "position" {"x" -26, "y" 2},
    "entity_number" 178},
   :oil? nil})

(def template2
  {:bus-outputs {"copper-ore" 3, "transport-belt" 6, "copper-plate" 4, "iron-ore" 1, "iron-plate" 2, "copper-cable" 9, "iron-gear-wheel" 5, "electronic-circuit" 10, "science-pack-2" 12, "science-pack-1" 8, "underground-belt" 7, "coal" 0, "inserter" 11}, :recipe "_research_", :products ["coal" "iron-ore" "iron-plate" "copper-ore" "copper-plate" "iron-gear-wheel" "transport-belt" "underground-belt" "science-pack-1" "copper-cable" "electronic-circuit" "inserter" "science-pack-2"], :factories {"transport-belt" {:n 1, :facility "assembling-machine-1"}, "copper-plate" {:n 5, :facility "stone-furnace"}, "iron-plate" {:n 5, :facility "stone-furnace"}, "copper-cable" {:n 1, :facility "assembling-machine-1"}, "iron-gear-wheel" {:n 2, :facility "assembling-machine-1"}, "electronic-circuit" {:n 1, :facility "assembling-machine-1"}, "science-pack-2" {:n 1, :facility "assembling-machine-1"}, "science-pack-1" {:n 2, :facility "assembling-machine-1"}, "underground-belt" {:n 1, :facility "assembling-machine-1"}, "inserter" {:n 1, :facility "assembling-machine-1"}}, :recipe-names #{"iron-plate" "copper-plate" "transport-belt" "underground-belt" "science-pack-1" "science-pack-2"}, :others nil, :entity {"direction" 6, "name" "underground-belt", "type" "input", "position" {"x" -5, "y" -46}, "entity_number" 21}, :oil? nil})
