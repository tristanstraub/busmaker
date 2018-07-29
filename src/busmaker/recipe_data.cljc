(ns busmaker.recipe-data)

(defn factory-type
  [recipe]
  (cond (#{"_research_" "_research_full_" "_research_military_" "_research_production_"} recipe) "lab"
        (#{"iron-plate" "copper-plate" "steel-plate" "stone-brick"} recipe)                   "stone-furnace"
        (#{"light-oil" "heavy-oil" "petroleum-gas"} recipe)                                   "oil-refinery"
        (#{"lubricant" "sulfur" "sulfuric-acid" "battery" "plastic-bar" "explosives"} recipe) "chemical-plant"
        (re-find #"ore" recipe)                                                               "electric-mining-drill"
        :else                                                                                 "assembling-machine-1"))

(def science
  '({:name "_research_"
     :ingredients [["science-pack-1"]
                   ["science-pack-2"]]}
    {:name "_research_military_"
     :ingredients [["science-pack-1"]
                   ["science-pack-2"]
                   ["science-pack-3"]
                   ["military-science-pack"]]}
    {:name "_research_production_"
     :ingredients [["science-pack-1"]
                   ["science-pack-2"]
                   ["science-pack-3"]
                   ["military-science-pack"]
                   ["production-science-pack"]]}
    {:name "_research_full_"
     :ingredients [["science-pack-1"]
                   ["science-pack-2"]
                   ["science-pack-3"]
                   ["military-science-pack"]
                   ["production-science-pack"]
                   ["high-tech-science-pack"]]}))

(def raw
  '({:name "iron-ore"}
    {:name "water"}
    {:name "crude-oil"}
    {:name "copper-ore"}
    {:name "coal"}))

(def fluid
  '({:name "heavy-oil"}
    {:name "light-oil"}
    {:name "petroleum-gas"}))

(def recipes
  (into (concat science raw fluid)
        '({:ingredients [["raw-wood" 1]]
           :name "wood"
           :result_count 2
           :type "recipe"
           :result "wood"}
          {:ingredients [["wood" 4]]
           :result "wooden-chest"
           :type "recipe"
           :name "wooden-chest"}
          {:ingredients [["iron-plate" 1]]
           :name "iron-stick"
           :result_count 2
           :type "recipe"
           :result "iron-stick"}
          {:ingredients [["iron-stick" 2] ["iron-plate" 3]]
           :result "iron-axe"
           :type "recipe"
           :name "iron-axe"}
          {:ingredients [["stone" 5]]
           :result "stone-furnace"
           :type "recipe"
           :name "stone-furnace"}
          {:ingredients [["stone-furnace" 1] ["pipe" 4]]
           :result "boiler"
           :type "recipe"
           :name "boiler"}
          {:normal
           {:ingredients
            [["iron-gear-wheel" 8] ["pipe" 5] ["iron-plate" 10]]
            :result "steam-engine"}
           :name "steam-engine"
           :type "recipe"
           :expensive
           {:ingredients
            [["iron-gear-wheel" 10] ["pipe" 5] ["iron-plate" 50]]
            :result "steam-engine"}}
          {:normal
           {:ingredients [["iron-plate" 2]] :result "iron-gear-wheel"}
           :name "iron-gear-wheel"
           :type "recipe"
           :expensive
           {:ingredients [["iron-plate" 4]] :result "iron-gear-wheel"}}
          {:normal
           {:ingredients [["iron-plate" 1] ["copper-cable" 3]]
            :result "electronic-circuit"}
           :name "electronic-circuit"
           :type "recipe"
           :expensive
           {:ingredients [["iron-plate" 2] ["copper-cable" 10]]
            :result "electronic-circuit"}}
          {:ingredients [["iron-plate" 1] ["iron-gear-wheel" 1]]
           :name "transport-belt"
           :result_count 2
           :type "recipe"
           :result "transport-belt"}
          {:normal
           {:ingredients
            [["electronic-circuit" 3]
             ["iron-gear-wheel" 5]
             ["iron-plate" 10]]
            :energy_required 2
            :result "electric-mining-drill"}
           :name "electric-mining-drill"
           :type "recipe"
           :expensive
           {:ingredients
            [["electronic-circuit" 5]
             ["iron-gear-wheel" 10]
             ["iron-plate" 20]]
            :energy_required 2
            :result "electric-mining-drill"}}
          {:normal
           {:ingredients
            [["iron-gear-wheel" 3] ["stone-furnace" 1] ["iron-plate" 3]]
            :energy_required 2
            :result "burner-mining-drill"}
           :name "burner-mining-drill"
           :type "recipe"
           :expensive
           {:ingredients
            [["iron-gear-wheel" 6] ["stone-furnace" 2] ["iron-plate" 6]]
            :energy_required 4
            :result "burner-mining-drill"}}
          {:ingredients
           [["electronic-circuit" 1]
            ["iron-gear-wheel" 1]
            ["iron-plate" 1]]
           :result "inserter"
           :type "recipe"
           :name "inserter"}
          {:ingredients [["iron-plate" 1] ["iron-gear-wheel" 1]]
           :result "burner-inserter"
           :type "recipe"
           :name "burner-inserter"}
          {:normal {:ingredients [["iron-plate" 1]] :result "pipe"}
           :name "pipe"
           :type "recipe"
           :expensive {:ingredients [["iron-plate" 2]] :result "pipe"}}
          {:ingredients
           [["electronic-circuit" 2] ["pipe" 1] ["iron-gear-wheel" 1]]
           :result "offshore-pump"
           :type "recipe"
           :name "offshore-pump"}
          {:ingredients [["copper-plate" 1]]
           :name "copper-cable"
           :result_count 2
           :type "recipe"
           :result "copper-cable"}
          {:ingredients [["wood" 2] ["copper-cable" 2]]
           :name "small-electric-pole"
           :result_count 2
           :type "recipe"
           :result "small-electric-pole"}
          {:ingredients [["copper-plate" 5] ["iron-plate" 5]]
           :name "pistol"
           :result "pistol"
           :type "recipe"
           :energy_required 5}
          {:normal
           {:ingredients
            [["iron-gear-wheel" 10] ["copper-plate" 5] ["iron-plate" 10]]
            :result "submachine-gun"
            :energy_required 10
            :enabled false}
           :name "submachine-gun"
           :type "recipe"
           :expensive
           {:ingredients
            [["iron-gear-wheel" 15] ["copper-plate" 20] ["iron-plate" 30]]
            :result "submachine-gun"
            :energy_required 10
            :enabled false}}
          {:ingredients [["iron-plate" 4]]
           :name "firearm-magazine"
           :result_count 1
           :result "firearm-magazine"
           :type "recipe"
           :energy_required 1}
          {:ingredients [["iron-plate" 40]]
           :name "light-armor"
           :enabled true
           :result "light-armor"
           :type "recipe"
           :energy_required 3}
          {:ingredients
           [["electronic-circuit" 5]
            ["iron-gear-wheel" 5]
            ["iron-plate" 10]]
           :result "radar"
           :type "recipe"
           :name "radar"}
          {:ingredients
           [["electronic-circuit" 1] ["iron-stick" 3] ["iron-plate" 1]]
           :name "small-lamp"
           :enabled false
           :type "recipe"
           :result "small-lamp"}
          {:ingredients [["pipe" 10] ["iron-plate" 5]]
           :name "pipe-to-ground"
           :result_count 2
           :type "recipe"
           :result "pipe-to-ground"}
          {:ingredients
           [["electronic-circuit" 3]
            ["iron-gear-wheel" 5]
            ["iron-plate" 9]]
           :name "assembling-machine-1"
           :enabled false
           :type "recipe"
           :result "assembling-machine-1"}
          {:ingredients [["electronic-circuit" 2] ["iron-gear-wheel" 2]]
           :result "repair-pack"
           :type "recipe"
           :name "repair-pack"}
          {:enabled false
           :energy_required 10
           :type "recipe"
           :ingredients [["advanced-circuit" 5] ["steel-plate" 10]]
           :result "night-vision-equipment"
           :name "night-vision-equipment"}
          {:enabled false
           :energy_required 10
           :type "recipe"
           :ingredients [["advanced-circuit" 5] ["steel-plate" 10]]
           :result "energy-shield-equipment"
           :name "energy-shield-equipment"}
          {:enabled false
           :energy_required 10
           :type "recipe"
           :ingredients
           [["energy-shield-equipment" 10] ["processing-unit" 10]]
           :result "energy-shield-mk2-equipment"
           :name "energy-shield-mk2-equipment"}
          {:enabled false
           :energy_required 10
           :type "recipe"
           :ingredients [["battery" 5] ["steel-plate" 10]]
           :result "battery-equipment"
           :name "battery-equipment"}
          {:enabled false
           :energy_required 10
           :type "recipe"
           :ingredients [["battery-equipment" 10] ["processing-unit" 20]]
           :result "battery-mk2-equipment"
           :name "battery-mk2-equipment"}
          {:enabled false
           :energy_required 10
           :type "recipe"
           :ingredients
           [["solar-panel" 5] ["advanced-circuit" 1] ["steel-plate" 5]]
           :result "solar-panel-equipment"
           :name "solar-panel-equipment"}
          {:enabled false
           :energy_required 10
           :type "recipe"
           :ingredients [["processing-unit" 250]]
           :result "fusion-reactor-equipment"
           :name "fusion-reactor-equipment"}
          {:enabled false
           :energy_required 10
           :type "recipe"
           :ingredients
           [["processing-unit" 1] ["steel-plate" 5] ["laser-turret" 5]]
           :result "personal-laser-defense-equipment"
           :name "personal-laser-defense-equipment"}
          {:enabled false
           :energy_required 10
           :type "recipe"
           :ingredients
           [["processing-unit" 5] ["steel-plate" 20] ["laser-turret" 10]]
           :result "discharge-defense-equipment"
           :name "discharge-defense-equipment"}
          {:enabled false
           :energy_required 10
           :type "recipe"
           :ingredients
           [["processing-unit" 10]
            ["electric-engine-unit" 30]
            ["steel-plate" 20]]
           :result "exoskeleton-equipment"
           :name "exoskeleton-equipment"}
          {:enabled false
           :energy_required 10
           :type "recipe"
           :ingredients
           [["advanced-circuit" 10]
            ["iron-gear-wheel" 40]
            ["steel-plate" 20]
            ["battery" 45]]
           :result "personal-roboport-equipment"
           :name "personal-roboport-equipment"}
          {:enabled false
           :energy_required 20
           :type "recipe"
           :ingredients
           [["personal-roboport-equipment" 5] ["processing-unit" 100]]
           :result "personal-roboport-mk2-equipment"
           :name "personal-roboport-mk2-equipment"}
          {:name "player-port"
           :ingredients
           [["electronic-circuit" 10]
            ["iron-gear-wheel" 5]
            ["iron-plate" 1]]
           :type "recipe"
           :enabled false
           :result "player-port"}
          {:name "fast-transport-belt"
           :ingredients [["iron-gear-wheel" 5] ["transport-belt" 1]]
           :type "recipe"
           :enabled false
           :result "fast-transport-belt"}
          {:name "express-transport-belt"
           :normal
           {:enabled false
            :ingredients
            [["iron-gear-wheel" 10]
             ["fast-transport-belt" 1]
             {:amount 20 :name "lubricant" :type "fluid"}]
            :result "express-transport-belt"}
           :type "recipe"
           :category "crafting-with-fluid"
           :expensive
           {:enabled false
            :ingredients
            [["iron-gear-wheel" 20]
             ["fast-transport-belt" 1]
             {:amount 20 :name "lubricant" :type "fluid"}]
            :result "express-transport-belt"}}
          {:name "solar-panel"
           :energy_required 10
           :type "recipe"
           :enabled false
           :result "solar-panel"
           :ingredients
           [["steel-plate" 5] ["electronic-circuit" 15] ["copper-plate" 5]]}
          {:expensive
           {:enabled false
            :ingredients
            [["iron-plate" 20]
             ["electronic-circuit" 5]
             ["iron-gear-wheel" 10]
             ["assembling-machine-1" 1]]
            :result "assembling-machine-2"}
           :name "assembling-machine-2"
           :normal
           {:enabled false
            :ingredients
            [["iron-plate" 9]
             ["electronic-circuit" 3]
             ["iron-gear-wheel" 5]
             ["assembling-machine-1" 1]]
            :result "assembling-machine-2"}
           :type "recipe"}
          {:name "assembling-machine-3"
           :ingredients [["speed-module" 4] ["assembling-machine-2" 2]]
           :type "recipe"
           :enabled false
           :result "assembling-machine-3"}
          {:name "car"
           :energy_required 2
           :type "recipe"
           :enabled false
           :result "car"
           :ingredients
           [["engine-unit" 8] ["iron-plate" 20] ["steel-plate" 5]]}
          {:expensive
           {:result "tank"
            :enabled false
            :energy_required 8
            :ingredients
            [["engine-unit" 64]
             ["steel-plate" 100]
             ["iron-gear-wheel" 30]
             ["advanced-circuit" 20]]}
           :name "tank"
           :normal
           {:result "tank"
            :enabled false
            :energy_required 5
            :ingredients
            [["engine-unit" 32]
             ["steel-plate" 50]
             ["iron-gear-wheel" 15]
             ["advanced-circuit" 10]]}
           :type "recipe"}
          {:name "rail"
           :ingredients [["stone" 1] ["iron-stick" 1] ["steel-plate" 1]]
           :type "recipe"
           :enabled false
           :result_count 2
           :result "rail"}
          {:name "locomotive"
           :energy_required 4
           :type "recipe"
           :enabled false
           :result "locomotive"
           :ingredients
           [["engine-unit" 20]
            ["electronic-circuit" 10]
            ["steel-plate" 30]]}
          {:name "cargo-wagon"
           :energy_required 1
           :type "recipe"
           :enabled false
           :result "cargo-wagon"
           :ingredients
           [["iron-gear-wheel" 10] ["iron-plate" 20] ["steel-plate" 20]]}
          {:name "fluid-wagon"
           :energy_required 1.5
           :type "recipe"
           :enabled false
           :result "fluid-wagon"
           :ingredients
           [["iron-gear-wheel" 10]
            ["steel-plate" 16]
            ["pipe" 8]
            ["storage-tank" 1]]}
          {:name "artillery-wagon"
           :energy_required 4
           :type "recipe"
           :enabled false
           :result "artillery-wagon"
           :ingredients
           [["engine-unit" 64]
            ["iron-gear-wheel" 10]
            ["steel-plate" 40]
            ["pipe" 16]
            ["advanced-circuit" 20]]}
          {:name "train-stop"
           :ingredients
           [["electronic-circuit" 5] ["iron-plate" 10] ["steel-plate" 3]]
           :type "recipe"
           :enabled false
           :result "train-stop"}
          {:name "rail-signal"
           :ingredients [["electronic-circuit" 1] ["iron-plate" 5]]
           :type "recipe"
           :enabled false
           :result "rail-signal"}
          {:name "rail-chain-signal"
           :ingredients [["electronic-circuit" 1] ["iron-plate" 5]]
           :type "recipe"
           :enabled false
           :result "rail-chain-signal"}
          {:name "heavy-armor"
           :energy_required 8
           :type "recipe"
           :enabled false
           :result "heavy-armor"
           :ingredients [["copper-plate" 100] ["steel-plate" 50]]}
          {:name "modular-armor"
           :energy_required 15
           :type "recipe"
           :enabled false
           :result "modular-armor"
           :ingredients [["advanced-circuit" 30] ["steel-plate" 50]]}
          {:name "power-armor"
           :energy_required 20
           :type "recipe"
           :result "power-armor"
           :enabled false
           :requester_paste_multiplier 1
           :ingredients
           [["processing-unit" 40]
            ["electric-engine-unit" 20]
            ["steel-plate" 40]]}
          {:name "power-armor-mk2"
           :energy_required 25
           :type "recipe"
           :result "power-armor-mk2"
           :enabled false
           :requester_paste_multiplier 1
           :ingredients
           [["effectivity-module-3" 5]
            ["speed-module-3" 5]
            ["processing-unit" 40]
            ["steel-plate" 40]]}
          {:name "iron-chest"
           :ingredients [["iron-plate" 8]]
           :type "recipe"
           :enabled true
           :result "iron-chest"}
          {:name "steel-chest"
           :ingredients [["steel-plate" 8]]
           :type "recipe"
           :enabled false
           :result "steel-chest"}
          {:name "stone-wall"
           :ingredients [["stone-brick" 5]]
           :type "recipe"
           :enabled false
           :result "stone-wall"}
          {:name "gate"
           :ingredients
           [["stone-wall" 1] ["steel-plate" 2] ["electronic-circuit" 2]]
           :type "recipe"
           :enabled false
           :result "gate"}
          {:name "flamethrower"
           :energy_required 10
           :type "recipe"
           :enabled false
           :result "flamethrower"
           :ingredients [["steel-plate" 5] ["iron-gear-wheel" 10]]}
          {:name "land-mine"
           :energy_required 5
           :type "recipe"
           :result "land-mine"
           :enabled false
           :result_count 4
           :ingredients [["steel-plate" 1] ["explosives" 2]]}
          {:name "rocket-launcher"
           :energy_required 10
           :type "recipe"
           :enabled false
           :result "rocket-launcher"
           :ingredients
           [["iron-plate" 5]
            ["iron-gear-wheel" 5]
            ["electronic-circuit" 5]]}
          {:name "shotgun"
           :energy_required 10
           :type "recipe"
           :enabled false
           :result "shotgun"
           :ingredients
           [["iron-plate" 15]
            ["iron-gear-wheel" 5]
            ["copper-plate" 10]
            ["wood" 5]]}
          {:name "combat-shotgun"
           :energy_required 10
           :type "recipe"
           :enabled false
           :result "combat-shotgun"
           :ingredients
           [["steel-plate" 15]
            ["iron-gear-wheel" 5]
            ["copper-plate" 10]
            ["wood" 10]]}
          {:name "railgun"
           :energy_required 8
           :type "recipe"
           :enabled false
           :result "railgun"
           :ingredients
           [["steel-plate" 15]
            ["copper-plate" 15]
            ["electronic-circuit" 10]
            ["advanced-circuit" 5]]}
          {:name "science-pack-1"
           :energy_required 5
           :type "recipe"
           :result "science-pack-1"
           :ingredients [["copper-plate" 1] ["iron-gear-wheel" 1]]}
          {:name "science-pack-2"
           :energy_required 6
           :type "recipe"
           :result "science-pack-2"
           :ingredients [["inserter" 1] ["transport-belt" 1]]}
          {:name "science-pack-3"
           :energy_required 12
           :type "recipe"
           :enabled false
           :result "science-pack-3"
           :ingredients
           [["advanced-circuit" 1]
            ["engine-unit" 1]
            ["electric-mining-drill" 1]]}
          {:name "military-science-pack"
           :energy_required 10
           :type "recipe"
           :result "military-science-pack"
           :enabled false
           :result_count 2
           :ingredients
           [["piercing-rounds-magazine" 1] ["grenade" 1] ["gun-turret" 1]]}
          {:name "production-science-pack"
           :energy_required 14
           :type "recipe"
           :result "production-science-pack"
           :enabled false
           :result_count 2
           :ingredients [["electric-engine-unit" 1] ["electric-furnace" 1]]}
          {:name "high-tech-science-pack"
           :energy_required 14
           :type "recipe"
           :result "high-tech-science-pack"
           :enabled false
           :result_count 2
           :ingredients
           [["battery" 1]
            ["processing-unit" 3]
            ["speed-module" 1]
            ["copper-cable" 30]]}
          {:name "lab"
           :energy_required 2
           :type "recipe"
           :result "lab"
           :ingredients
           [["electronic-circuit" 10]
            ["iron-gear-wheel" 10]
            ["transport-belt" 4]]}
          {:name "red-wire"
           :ingredients [["electronic-circuit" 1] ["copper-cable" 1]]
           :type "recipe"
           :enabled false
           :result "red-wire"}
          {:name "green-wire"
           :ingredients [["electronic-circuit" 1] ["copper-cable" 1]]
           :type "recipe"
           :enabled false
           :result "green-wire"}
          {:name "underground-belt"
           :energy_required 1
           :type "recipe"
           :result "underground-belt"
           :enabled false
           :result_count 2
           :ingredients [["iron-plate" 10] ["transport-belt" 5]]}
          {:name "fast-underground-belt"
           :energy_required 2
           :type "recipe"
           :result "fast-underground-belt"
           :enabled false
           :result_count 2
           :ingredients [["iron-gear-wheel" 40] ["underground-belt" 2]]}
          {:result "express-underground-belt"
           :name "express-underground-belt"
           :energy_required 2
           :type "recipe"
           :result_count 2
           :enabled false
           :category "crafting-with-fluid"
           :ingredients
           [["iron-gear-wheel" 80]
            ["fast-underground-belt" 2]
            {:amount 40 :name "lubricant" :type "fluid"}]}
          {:name "loader"
           :energy_required 1
           :type "recipe"
           :enabled false
           :result "loader"
           :ingredients
           [["inserter" 5]
            ["electronic-circuit" 5]
            ["iron-gear-wheel" 5]
            ["iron-plate" 5]
            ["transport-belt" 5]]}
          {:name "fast-loader"
           :energy_required 3
           :type "recipe"
           :enabled false
           :result "fast-loader"
           :ingredients [["fast-transport-belt" 5] ["loader" 1]]}
          {:name "express-loader"
           :energy_required 10
           :type "recipe"
           :enabled false
           :result "express-loader"
           :ingredients [["express-transport-belt" 5] ["fast-loader" 1]]}
          {:name "splitter"
           :energy_required 1
           :type "recipe"
           :enabled false
           :result "splitter"
           :ingredients
           [["electronic-circuit" 5] ["iron-plate" 5] ["transport-belt" 4]]}
          {:name "fast-splitter"
           :energy_required 2
           :type "recipe"
           :enabled false
           :result "fast-splitter"
           :ingredients
           [["splitter" 1]
            ["iron-gear-wheel" 10]
            ["electronic-circuit" 10]]}
          {:name "express-splitter"
           :energy_required 2
           :type "recipe"
           :result "express-splitter"
           :enabled false
           :category "crafting-with-fluid"
           :ingredients
           [["fast-splitter" 1]
            ["iron-gear-wheel" 10]
            ["advanced-circuit" 10]
            {:amount 80 :name "lubricant" :type "fluid"}]}
          {:expensive
           {:result "advanced-circuit"
            :enabled false
            :energy_required 6
            :ingredients
            [["electronic-circuit" 2]
             ["plastic-bar" 4]
             ["copper-cable" 8]]}
           :name "advanced-circuit"
           :normal
           {:result "advanced-circuit"
            :enabled false
            :energy_required 6
            :ingredients
            [["electronic-circuit" 2]
             ["plastic-bar" 2]
             ["copper-cable" 4]]}
           :type "recipe"}
          {:name "processing-unit"
           :normal
           {:result "processing-unit"
            :enabled false
            :energy_required 10
            :ingredients
            [["electronic-circuit" 20]
             ["advanced-circuit" 2]
             {:amount 5 :name "sulfuric-acid" :type "fluid"}]}
           :type "recipe"
           :category "crafting-with-fluid"
           :expensive
           {:result "processing-unit"
            :enabled false
            :energy_required 10
            :ingredients
            [["electronic-circuit" 20]
             ["advanced-circuit" 2]
             {:amount 10 :name "sulfuric-acid" :type "fluid"}]}}
          {:name "logistic-robot"
           :ingredients [["flying-robot-frame" 1] ["advanced-circuit" 2]]
           :type "recipe"
           :enabled false
           :result "logistic-robot"}
          {:name "construction-robot"
           :ingredients [["flying-robot-frame" 1] ["electronic-circuit" 2]]
           :type "recipe"
           :enabled false
           :result "construction-robot"}
          {:name "logistic-chest-passive-provider"
           :ingredients
           [["steel-chest" 1]
            ["electronic-circuit" 3]
            ["advanced-circuit" 1]]
           :type "recipe"
           :enabled false
           :result "logistic-chest-passive-provider"}
          {:name "logistic-chest-active-provider"
           :ingredients
           [["steel-chest" 1]
            ["electronic-circuit" 3]
            ["advanced-circuit" 1]]
           :type "recipe"
           :enabled false
           :result "logistic-chest-active-provider"}
          {:name "logistic-chest-storage"
           :ingredients
           [["steel-chest" 1]
            ["electronic-circuit" 3]
            ["advanced-circuit" 1]]
           :type "recipe"
           :enabled false
           :result "logistic-chest-storage"}
          {:name "logistic-chest-buffer"
           :ingredients
           [["steel-chest" 1]
            ["electronic-circuit" 3]
            ["advanced-circuit" 1]]
           :type "recipe"
           :enabled false
           :result "logistic-chest-buffer"}
          {:name "logistic-chest-requester"
           :ingredients
           [["steel-chest" 1]
            ["electronic-circuit" 3]
            ["advanced-circuit" 1]]
           :type "recipe"
           :enabled false
           :result "logistic-chest-requester"}
          {:name "rocket-silo"
           :ingredients
           [["steel-plate" 1000]
            ["concrete" 1000]
            ["pipe" 100]
            ["processing-unit" 200]
            ["electric-engine-unit" 200]]
           :type "recipe"
           :result "rocket-silo"
           :enabled false
           :requester_paste_multiplier 1
           :energy_required 30}
          {:name "roboport"
           :energy_required 5
           :type "recipe"
           :enabled false
           :result "roboport"
           :ingredients
           [["steel-plate" 45]
            ["iron-gear-wheel" 45]
            ["advanced-circuit" 45]]}
          {:name "steel-axe"
           :ingredients [["steel-plate" 5] ["iron-stick" 2]]
           :type "recipe"
           :enabled false
           :result "steel-axe"}
          {:name "big-electric-pole"
           :ingredients [["steel-plate" 5] ["copper-plate" 5]]
           :type "recipe"
           :enabled false
           :result "big-electric-pole"}
          {:name "substation"
           :ingredients
           [["steel-plate" 10] ["advanced-circuit" 5] ["copper-plate" 5]]
           :type "recipe"
           :enabled false
           :result "substation"}
          {:name "medium-electric-pole"
           :ingredients [["steel-plate" 2] ["copper-plate" 2]]
           :type "recipe"
           :enabled false
           :result "medium-electric-pole"}
          {:name "accumulator"
           :energy_required 10
           :type "recipe"
           :enabled false
           :result "accumulator"
           :ingredients [["iron-plate" 2] ["battery" 5]]}
          {:name "steel-furnace"
           :ingredients [["steel-plate" 6] ["stone-brick" 10]]
           :type "recipe"
           :result "steel-furnace"
           :enabled false
           :energy_required 3}
          {:name "electric-furnace"
           :ingredients
           [["steel-plate" 10] ["advanced-circuit" 5] ["stone-brick" 10]]
           :type "recipe"
           :result "electric-furnace"
           :enabled false
           :energy_required 5}
          {:name "beacon"
           :energy_required 15
           :type "recipe"
           :enabled false
           :result "beacon"
           :ingredients
           [["electronic-circuit" 20]
            ["advanced-circuit" 20]
            ["steel-plate" 10]
            ["copper-cable" 10]]}
          {:name "pumpjack"
           :energy_required 5
           :type "recipe"
           :result "pumpjack"
           :enabled false
           :ingredients
           [["steel-plate" 5]
            ["iron-gear-wheel" 10]
            ["electronic-circuit" 5]
            ["pipe" 10]]}
          {:name "oil-refinery"
           :energy_required 8
           :type "recipe"
           :result "oil-refinery"
           :enabled false
           :ingredients
           [["steel-plate" 15]
            ["iron-gear-wheel" 10]
            ["stone-brick" 10]
            ["electronic-circuit" 10]
            ["pipe" 10]]}
          {:name "engine-unit"
           :energy_required 10
           :type "recipe"
           :enabled false
           :result "engine-unit"
           :category "advanced-crafting"
           :ingredients
           [["steel-plate" 1] ["iron-gear-wheel" 1] ["pipe" 2]]}
          {:name "electric-engine-unit"
           :energy_required 10
           :type "recipe"
           :enabled false
           :result "electric-engine-unit"
           :category "crafting-with-fluid"
           :ingredients
           [["engine-unit" 1]
            {:amount 15 :name "lubricant" :type "fluid"}
            ["electronic-circuit" 2]]}
          {:name "flying-robot-frame"
           :energy_required 20
           :type "recipe"
           :result "flying-robot-frame"
           :enabled false
           :ingredients
           [["electric-engine-unit" 1]
            ["battery" 2]
            ["steel-plate" 1]
            ["electronic-circuit" 3]]}
          {:name "explosives"
           :crafting_machine_tint
           {:tertiary {:r 0.0 :a 0.0 :b 0.365 :g 0.288}
            :secondary {:r 0.0 :a 0.898 :b 0.659 :g 0.441}
            :primary {:r 0.955 :a 0.0 :b 0.0 :g 0.945}}
           :type "recipe"
           :expensive
           {:energy_required 5
            :result "explosives"
            :enabled false
            :result_count 2
            :ingredients
            [{:amount 2 :name "sulfur" :type "item"}
             {:amount 2 :name "coal" :type "item"}
             {:amount 10 :name "water" :type "fluid"}]}
           :category "chemistry"
           :normal
           {:energy_required 5
            :result "explosives"
            :enabled false
            :result_count 2
            :ingredients
            [{:amount 1 :name "sulfur" :type "item"}
             {:amount 1 :name "coal" :type "item"}
             {:amount 10 :name "water" :type "fluid"}]}}
          {:name "battery"
           :normal
           {:result "battery"
            :enabled false
            :energy_required 5
            :ingredients
            [{:amount 20 :name "sulfuric-acid" :type "fluid"}
             ["iron-plate" 1]
             ["copper-plate" 1]]}
           :type "recipe"
           :crafting_machine_tint
           {:tertiary {:r 0.43 :a 0.0 :b 0.726 :g 0.805}
            :secondary {:r 0.0 :a 0.357 :b 0.894 :g 0.68}
            :primary {:r 0.97 :a 0.0 :b 0.0 :g 0.611}}
           :category "chemistry"
           :expensive
           {:result "battery"
            :enabled false
            :energy_required 5
            :ingredients
            [{:amount 40 :name "sulfuric-acid" :type "fluid"}
             ["iron-plate" 1]
             ["copper-plate" 1]]}}
          {:name "storage-tank"
           :energy_required 3
           :type "recipe"
           :enabled false
           :result "storage-tank"
           :ingredients [["iron-plate" 20] ["steel-plate" 5]]}
          {:name "pump"
           :energy_required 2
           :type "recipe"
           :enabled false
           :result "pump"
           :ingredients [["engine-unit" 1] ["steel-plate" 1] ["pipe" 1]]}
          {:name "chemical-plant"
           :energy_required 5
           :type "recipe"
           :enabled false
           :result "chemical-plant"
           :ingredients
           [["steel-plate" 5]
            ["iron-gear-wheel" 5]
            ["electronic-circuit" 5]
            ["pipe" 5]]}
          {:name "small-plane"
           :energy_required 30
           :type "recipe"
           :result "small-plane"
           :enabled false
           :category "crafting"
           :ingredients
           [["plastic-bar" 100]
            ["advanced-circuit" 200]
            ["electric-engine-unit" 20]
            ["battery" 100]]}
          {:name "arithmetic-combinator"
           :ingredients [["copper-cable" 5] ["electronic-circuit" 5]]
           :type "recipe"
           :enabled false
           :result "arithmetic-combinator"}
          {:name "decider-combinator"
           :ingredients [["copper-cable" 5] ["electronic-circuit" 5]]
           :type "recipe"
           :enabled false
           :result "decider-combinator"}
          {:name "constant-combinator"
           :ingredients [["copper-cable" 5] ["electronic-circuit" 2]]
           :type "recipe"
           :enabled false
           :result "constant-combinator"}
          {:name "power-switch"
           :energy_required 2
           :type "recipe"
           :enabled false
           :result "power-switch"
           :ingredients
           [["iron-plate" 5] ["copper-cable" 5] ["electronic-circuit" 2]]}
          {:name "programmable-speaker"
           :energy_required 2
           :type "recipe"
           :enabled false
           :result "programmable-speaker"
           :ingredients
           [["iron-plate" 5] ["copper-cable" 5] ["electronic-circuit" 4]]}
          {:name "low-density-structure"
           :normal
           {:result "low-density-structure"
            :enabled false
            :energy_required 30
            :ingredients
            [["steel-plate" 10] ["copper-plate" 5] ["plastic-bar" 5]]}
           :type "recipe"
           :category "crafting"
           :expensive
           {:result "low-density-structure"
            :enabled false
            :energy_required 30
            :ingredients
            [["steel-plate" 10] ["copper-plate" 10] ["plastic-bar" 10]]}}
          {:name "rocket-fuel"
           :energy_required 30
           :type "recipe"
           :result "rocket-fuel"
           :enabled false
           :category "crafting"
           :ingredients [["solid-fuel" 10]]}
          {:name "rocket-control-unit"
           :energy_required 30
           :type "recipe"
           :result "rocket-control-unit"
           :enabled false
           :category "crafting"
           :ingredients [["processing-unit" 1] ["speed-module" 1]]}
          {:result "rocket-part"
           :name "rocket-part"
           :energy_required 3
           :type "recipe"
           :hidden true
           :enabled false
           :category "rocket-building"
           :ingredients
           [["rocket-control-unit" 10]
            ["low-density-structure" 10]
            ["rocket-fuel" 10]]}
          {:requester_paste_multiplier 1
           :name "satellite"
           :energy_required 5
           :type "recipe"
           :result "satellite"
           :enabled false
           :category "crafting"
           :ingredients
           [["low-density-structure" 100]
            ["solar-panel" 100]
            ["accumulator" 100]
            ["radar" 5]
            ["processing-unit" 100]
            ["rocket-fuel" 50]]}
          {:result_count 10
           :name "concrete"
           :energy_required 10
           :type "recipe"
           :result "concrete"
           :enabled false
           :category "crafting-with-fluid"
           :ingredients
           [["stone-brick" 5]
            ["iron-ore" 1]
            {:amount 100 :name "water" :type "fluid"}]}
          {:result_count 10
           :name "hazard-concrete"
           :energy_required 0.25
           :type "recipe"
           :result "hazard-concrete"
           :enabled false
           :category "crafting"
           :ingredients [["concrete" 10]]}
          {:result_count 10
           :name "refined-concrete"
           :energy_required 15
           :type "recipe"
           :result "refined-concrete"
           :enabled false
           :category "crafting-with-fluid"
           :ingredients
           [["concrete" 20]
            ["iron-stick" 8]
            ["steel-plate" 1]
            {:amount 100 :name "water" :type "fluid"}]}
          {:result_count 10
           :name "refined-hazard-concrete"
           :energy_required 0.25
           :type "recipe"
           :result "refined-hazard-concrete"
           :enabled false
           :category "crafting"
           :ingredients [["refined-concrete" 10]]}
          {:result_count 1
           :name "landfill"
           :energy_required 0.5
           :type "recipe"
           :result "landfill"
           :enabled false
           :category "crafting"
           :ingredients [["stone" 20]]}
          {:name "electric-energy-interface"
           :energy_required 0.5
           :type "recipe"
           :enabled false
           :result "electric-energy-interface"
           :ingredients [["iron-plate" 2] ["electronic-circuit" 5]]}
          {:name "nuclear-reactor"
           :energy_required 8
           :type "recipe"
           :result "nuclear-reactor"
           :enabled false
           :requester_paste_multiplier 1
           :ingredients
           [["concrete" 500]
            ["steel-plate" 500]
            ["advanced-circuit" 500]
            ["copper-plate" 500]]}
          {:name "centrifuge"
           :energy_required 4
           :type "recipe"
           :result "centrifuge"
           :enabled false
           :requester_paste_multiplier 10
           :ingredients
           [["concrete" 100]
            ["steel-plate" 50]
            ["advanced-circuit" 100]
            ["iron-gear-wheel" 100]]}
          {:category "centrifuging"
           :name "uranium-processing"
           :type "recipe"
           :icon "__base__/graphics/icons/uranium-processing.png"
           :icon_size 32
           :ingredients [["uranium-ore" 10]]
           :order "k[uranium-processing]"
           :energy_required 10
           :enabled false
           :results
           [{:amount 1 :name "uranium-235" :probability 0.007}
            {:amount 1 :name "uranium-238" :probability 0.993}]
           :subgroup "raw-material"}
          {:category "centrifuging"
           :name "kovarex-enrichment-process"
           :type "recipe"
           :icon "__base__/graphics/icons/kovarex-enrichment-process.png"
           :icon_size 32
           :ingredients [["uranium-235" 40] ["uranium-238" 5]]
           :order "r[uranium-processing]-c[kovarex-enrichment-process]"
           :energy_required 50
           :main_product ""
           :enabled false
           :allow_decomposition false
           :results
           [{:amount 41 :name "uranium-235"}
            {:amount 2 :name "uranium-238"}]
           :subgroup "intermediate-product"}
          {:category "centrifuging"
           :name "nuclear-fuel"
           :type "recipe"
           :icon "__base__/graphics/icons/nuclear-fuel.png"
           :icon_size 32
           :ingredients [["uranium-235" 1] ["rocket-fuel" 1]]
           :result "nuclear-fuel"
           :energy_required 60
           :enabled false}
          {:category "centrifuging"
           :name "nuclear-fuel-reprocessing"
           :type "recipe"
           :icon "__base__/graphics/icons/nuclear-fuel-reprocessing.png"
           :icon_size 32
           :ingredients [["used-up-uranium-fuel-cell" 5]]
           :order "r[uranium-processing]-b[nuclear-fuel-reprocessing]"
           :energy_required 50
           :main_product ""
           :enabled false
           :allow_decomposition false
           :results [{:amount 3 :name "uranium-238"}]
           :subgroup "intermediate-product"}
          {:name "uranium-fuel-cell"
           :energy_required 10
           :type "recipe"
           :result "uranium-fuel-cell"
           :enabled false
           :result_count 10
           :ingredients
           [["iron-plate" 10] ["uranium-235" 1] ["uranium-238" 19]]}
          {:name "heat-exchanger"
           :energy_required 3
           :type "recipe"
           :enabled false
           :result "heat-exchanger"
           :ingredients
           [["steel-plate" 10] ["copper-plate" 100] ["pipe" 10]]}
          {:name "heat-pipe"
           :energy_required 1
           :type "recipe"
           :enabled false
           :result "heat-pipe"
           :ingredients [["steel-plate" 10] ["copper-plate" 20]]}
          {:name "steam-turbine"
           :energy_required 3
           :type "recipe"
           :enabled false
           :result "steam-turbine"
           :ingredients
           [["iron-gear-wheel" 50] ["copper-plate" 50] ["pipe" 20]]}
          {:type "recipe"
           :name "speed-module"
           :result "speed-module"
           :ingredients [["advanced-circuit" 5] ["electronic-circuit" 5]]
           :energy_required 15
           :enabled false}
          {:type "recipe"
           :name "speed-module-2"
           :result "speed-module-2"
           :ingredients
           [["speed-module" 4]
            ["advanced-circuit" 5]
            ["processing-unit" 5]]
           :energy_required 30
           :enabled false}
          {:type "recipe"
           :name "speed-module-3"
           :result "speed-module-3"
           :ingredients
           [["speed-module-2" 5]
            ["advanced-circuit" 5]
            ["processing-unit" 5]]
           :energy_required 60
           :enabled false}
          {:type "recipe"
           :name "productivity-module"
           :result "productivity-module"
           :ingredients [["advanced-circuit" 5] ["electronic-circuit" 5]]
           :energy_required 15
           :enabled false}
          {:type "recipe"
           :name "productivity-module-2"
           :result "productivity-module-2"
           :ingredients
           [["productivity-module" 4]
            ["advanced-circuit" 5]
            ["processing-unit" 5]]
           :energy_required 30
           :enabled false}
          {:type "recipe"
           :name "productivity-module-3"
           :result "productivity-module-3"
           :ingredients
           [["productivity-module-2" 5]
            ["advanced-circuit" 5]
            ["processing-unit" 5]]
           :energy_required 60
           :enabled false}
          {:type "recipe"
           :name "effectivity-module"
           :result "effectivity-module"
           :ingredients [["advanced-circuit" 5] ["electronic-circuit" 5]]
           :energy_required 15
           :enabled false}
          {:type "recipe"
           :name "effectivity-module-2"
           :result "effectivity-module-2"
           :ingredients
           [["effectivity-module" 4]
            ["advanced-circuit" 5]
            ["processing-unit" 5]]
           :energy_required 30
           :enabled false}
          {:type "recipe"
           :name "effectivity-module-3"
           :result "effectivity-module-3"
           :ingredients
           [["effectivity-module-2" 5]
            ["advanced-circuit" 5]
            ["processing-unit" 5]]
           :energy_required 60
           :enabled false}
          {:category "oil-processing"
           :name "basic-oil-processing"
           :type "recipe"
           :icon "__base__/graphics/icons/fluid/basic-oil-processing.png"
           :icon_size 32
           :ingredients [{:type "fluid" :amount 100 :name "crude-oil"}]
           :order "a[oil-processing]-a[basic-oil-processing]"
           :energy_required 5
           :enabled false
           :results
           [{:type "fluid" :amount 30 :name "heavy-oil"}
            {:type "fluid" :amount 30 :name "light-oil"}
            {:type "fluid" :amount 40 :name "petroleum-gas"}]
           :subgroup "fluid-recipes"}
          {:category "oil-processing"
           :name "advanced-oil-processing"
           :type "recipe"
           :icon
           "__base__/graphics/icons/fluid/advanced-oil-processing.png"
           :icon_size 32
           :ingredients
           [{:type "fluid" :amount 50 :name "water"}
            {:type "fluid" :amount 100 :name "crude-oil"}]
           :order "a[oil-processing]-b[advanced-oil-processing]"
           :energy_required 5
           :enabled false
           :results
           [{:type "fluid" :amount 10 :name "heavy-oil"}
            {:type "fluid" :amount 45 :name "light-oil"}
            {:type "fluid" :amount 55 :name "petroleum-gas"}]
           :subgroup "fluid-recipes"}
          {:category "oil-processing"
           :name "coal-liquefaction"
           :type "recipe"
           :icon "__base__/graphics/icons/fluid/coal-liquefaction.png"
           :icon_size 32
           :ingredients
           [{:type "item" :amount 10 :name "coal"}
            {:type "fluid" :amount 25 :name "heavy-oil"}
            {:type "fluid" :amount 50 :name "steam"}]
           :order "a[oil-processing]-c[coal-liquefaction]"
           :energy_required 5
           :enabled false
           :allow_decomposition false
           :results
           [{:type "fluid" :amount 35 :name "heavy-oil"}
            {:type "fluid" :amount 15 :name "light-oil"}
            {:type "fluid" :amount 20 :name "petroleum-gas"}]
           :subgroup "fluid-recipes"}
          {:category "chemistry"
           :name "heavy-oil-cracking"
           :type "recipe"
           :icon "__base__/graphics/icons/fluid/heavy-oil-cracking.png"
           :icon_size 32
           :ingredients
           [{:type "fluid" :amount 30 :name "water"}
            {:type "fluid" :amount 40 :name "heavy-oil"}]
           :order "b[fluid-chemistry]-a[heavy-oil-cracking]"
           :energy_required 3
           :main_product ""
           :enabled false
           :crafting_machine_tint
           {:secondary {:r 0.722 :a 0.0 :b 0.19 :g 0.465}
            :primary {:r 0.29 :a 0.0 :b 0.0 :g 0.027}
            :tertiary {:r 0.87 :a 0.0 :b 0.0 :g 0.365}}
           :results [{:type "fluid" :amount 30 :name "light-oil"}]
           :subgroup "fluid-recipes"}
          {:category "chemistry"
           :name "light-oil-cracking"
           :type "recipe"
           :icon "__base__/graphics/icons/fluid/light-oil-cracking.png"
           :icon_size 32
           :ingredients
           [{:type "fluid" :amount 30 :name "water"}
            {:type "fluid" :amount 30 :name "light-oil"}]
           :order "b[fluid-chemistry]-b[light-oil-cracking]"
           :energy_required 3
           :main_product ""
           :enabled false
           :crafting_machine_tint
           {:secondary {:r 0.795 :a 0.0 :b 0.605 :g 0.805}
            :primary {:r 0.785 :a 0.0 :b 0.0 :g 0.406}
            :tertiary {:r 0.835 :a 0.0 :b 0.0 :g 0.551}}
           :results [{:type "fluid" :amount 20 :name "petroleum-gas"}]
           :subgroup "fluid-recipes"}
          {:category "chemistry"
           :name "sulfuric-acid"
           :type "recipe"
           :ingredients
           [{:type "item" :amount 5 :name "sulfur"}
            {:type "item" :amount 1 :name "iron-plate"}
            {:type "fluid" :amount 100 :name "water"}]
           :energy_required 1
           :enabled false
           :crafting_machine_tint
           {:secondary {:r 0.103 :a 0.0 :b 0.0 :g 0.94}
            :primary {:r 0.875 :a 0.0 :b 0.0 :g 0.735}
            :tertiary {:r 0.564 :a 0.0 :b 0.0 :g 0.795}}
           :results [{:type "fluid" :amount 50 :name "sulfuric-acid"}]
           :subgroup "fluid-recipes"}
          {:category "chemistry"
           :type "recipe"
           :results [{:type "item" :amount 2 :name "plastic-bar"}]
           :crafting_machine_tint
           {:secondary {:r 0.4 :a 0.0 :b 0.4 :g 0.4}
            :primary {:r 0.498 :a 0.0 :b 0.498 :g 0.498}
            :tertiary {:r 0.305 :a 0.0 :b 0.305 :g 0.305}}
           :ingredients
           [{:type "fluid" :amount 20 :name "petroleum-gas"}
            {:type "item" :amount 1 :name "coal"}]
           :energy_required 1
           :enabled false
           :name "plastic-bar"}
          {:category "chemistry"
           :name "solid-fuel-from-light-oil"
           :type "recipe"
           :icon "__base__/graphics/icons/solid-fuel-from-light-oil.png"
           :icon_size 32
           :ingredients [{:type "fluid" :amount 10 :name "light-oil"}]
           :order "b[fluid-chemistry]-c[solid-fuel-from-light-oil]"
           :energy_required 3
           :enabled false
           :crafting_machine_tint
           {:secondary {:r 0.735 :a 0.0 :b 0.325 :g 0.546}
            :primary {:r 0.27 :a 0.0 :b 0.0 :g 0.122}
            :tertiary {:r 0.61 :a 0.0 :b 0.0 :g 0.348}}
           :results [{:type "item" :amount 1 :name "solid-fuel"}]
           :subgroup "fluid-recipes"}
          {:category "chemistry"
           :name "solid-fuel-from-petroleum-gas"
           :type "recipe"
           :icon
           "__base__/graphics/icons/solid-fuel-from-petroleum-gas.png"
           :icon_size 32
           :ingredients
           [{:type "fluid" :amount 20 :name "petroleum-gas"}]
           :order "b[fluid-chemistry]-d[solid-fuel-from-petroleum-gas]"
           :energy_required 3
           :enabled false
           :crafting_machine_tint
           {:secondary {:r 0.589 :a 0.361 :b 0.615 :g 0.54}
            :primary {:r 0.331 :a 0.0 :b 0.51 :g 0.075}
            :tertiary {:r 0.469 :a 0.0 :b 0.695 :g 0.145}}
           :results [{:type "item" :amount 1 :name "solid-fuel"}]
           :subgroup "fluid-recipes"}
          {:category "chemistry"
           :name "solid-fuel-from-heavy-oil"
           :type "recipe"
           :icon "__base__/graphics/icons/solid-fuel-from-heavy-oil.png"
           :icon_size 32
           :ingredients [{:type "fluid" :amount 20 :name "heavy-oil"}]
           :order "b[fluid-chemistry]-e[solid-fuel-from-heavy-oil]"
           :energy_required 3
           :enabled false
           :crafting_machine_tint
           {:secondary {:r 0.47 :a 0.0 :b 0.19 :g 0.215}
            :primary {:r 0.16 :a 0.0 :b 0.095 :g 0.095}
            :tertiary {:r 0.435 :a 0.0 :b 0.135 :g 0.144}}
           :results [{:type "item" :amount 1 :name "solid-fuel"}]
           :subgroup "fluid-recipes"}
          {:category "chemistry"
           :type "recipe"
           :results [{:type "item" :amount 2 :name "sulfur"}]
           :crafting_machine_tint
           {:secondary {:r 0.812 :a 0.0 :b 0.0 :g 1.0}
            :primary {:r 1.0 :a 0.0 :b 0.0 :g 0.659}
            :tertiary {:r 0.96 :a 0.0 :b 0.0 :g 0.806}}
           :ingredients
           [{:type "fluid" :amount 30 :name "water"}
            {:type "fluid" :amount 30 :name "petroleum-gas"}]
           :energy_required 1
           :enabled false
           :name "sulfur"}
          {:category "chemistry"
           :name "lubricant"
           :type "recipe"
           :ingredients [{:type "fluid" :amount 10 :name "heavy-oil"}]
           :energy_required 1
           :enabled false
           :crafting_machine_tint
           {:secondary {:r 0.071 :a 0.0 :b 0.0 :g 0.64}
            :primary {:r 0.0 :a 0.0 :b 0.01 :g 0.26}
            :tertiary {:r 0.026 :a 0.0 :b 0.0 :g 0.52}}
           :results [{:type "fluid" :amount 10 :name "lubricant"}]
           :subgroup "fluid-recipes"}
          {:category "crafting"
           :type "recipe"
           :results [{:type "item" :amount 1 :name "empty-barrel"}]
           :enabled false
           :ingredients [{:type "item" :amount 1 :name "steel-plate"}]
           :energy_required 1
           :subgroup "intermediate-product"
           :name "empty-barrel"}
          {:enabled false
           :name "long-handed-inserter"
           :result "long-handed-inserter"
           :ingredients
           [["iron-gear-wheel" 1] ["iron-plate" 1] ["inserter" 1]]
           :type "recipe"}
          {:enabled false
           :name "fast-inserter"
           :result "fast-inserter"
           :ingredients
           [["electronic-circuit" 2] ["iron-plate" 2] ["inserter" 1]]
           :type "recipe"}
          {:enabled false
           :name "filter-inserter"
           :result "filter-inserter"
           :ingredients [["fast-inserter" 1] ["electronic-circuit" 4]]
           :type "recipe"}
          {:enabled false
           :name "stack-inserter"
           :result "stack-inserter"
           :ingredients
           [["iron-gear-wheel" 15]
            ["electronic-circuit" 15]
            ["advanced-circuit" 1]
            ["fast-inserter" 1]]
           :type "recipe"}
          {:enabled false
           :name "stack-filter-inserter"
           :result "stack-filter-inserter"
           :ingredients [["stack-inserter" 1] ["electronic-circuit" 5]]
           :type "recipe"}
          {:result "gun-turret"
           :name "gun-turret"
           :enabled false
           :energy_required 8
           :type "recipe"
           :ingredients
           [["iron-gear-wheel" 10] ["copper-plate" 10] ["iron-plate" 20]]}
          {:expensive
           {:enabled false
            :ingredients [["iron-plate" 10]]
            :energy_required 35
            :result "steel-plate"}
           :name "steel-plate"
           :normal
           {:enabled false
            :ingredients [["iron-plate" 5]]
            :energy_required 17.5
            :result "steel-plate"}
           :category "smelting"
           :type "recipe"}
          {:type "recipe"
           :energy_required 8
           :name "poison-capsule"
           :enabled false
           :result "poison-capsule"
           :ingredients
           [["steel-plate" 3] ["electronic-circuit" 3] ["coal" 10]]}
          {:type "recipe"
           :energy_required 8
           :name "slowdown-capsule"
           :enabled false
           :result "slowdown-capsule"
           :ingredients
           [["steel-plate" 2] ["electronic-circuit" 2] ["coal" 5]]}
          {:type "recipe"
           :energy_required 8
           :name "grenade"
           :enabled false
           :result "grenade"
           :ingredients [["iron-plate" 5] ["coal" 10]]}
          {:type "recipe"
           :energy_required 8
           :name "cluster-grenade"
           :enabled false
           :result "cluster-grenade"
           :ingredients [["grenade" 7] ["explosives" 5] ["steel-plate" 5]]}
          {:type "recipe"
           :energy_required 8
           :name "defender-capsule"
           :enabled false
           :result "defender-capsule"
           :ingredients
           [["piercing-rounds-magazine" 1]
            ["electronic-circuit" 2]
            ["iron-gear-wheel" 3]]}
          {:type "recipe"
           :energy_required 15
           :name "distractor-capsule"
           :enabled false
           :result "distractor-capsule"
           :ingredients [["defender-capsule" 4] ["advanced-circuit" 3]]}
          {:type "recipe"
           :energy_required 15
           :name "destroyer-capsule"
           :enabled false
           :result "destroyer-capsule"
           :ingredients [["distractor-capsule" 4] ["speed-module" 1]]}
          {:type "recipe"
           :result "discharge-defense-remote"
           :name "discharge-defense-remote"
           :enabled false
           :ingredients [["electronic-circuit" 1]]}
          {:type "recipe"
           :energy_required 8
           :name "cliff-explosives"
           :enabled false
           :result "cliff-explosives"
           :ingredients
           [["explosives" 10] ["grenade" 1] ["empty-barrel" 1]]}
          {:type "recipe"
           :result "artillery-targeting-remote"
           :name "artillery-targeting-remote"
           :enabled false
           :ingredients [["processing-unit" 1] ["radar" 1]]}
          {:enabled false
           :result "laser-turret"
           :name "laser-turret"
           :ingredients
           [["steel-plate" 20] ["electronic-circuit" 20] ["battery" 12]]
           :energy_required 20
           :type "recipe"}
          {:enabled false
           :result "flamethrower-turret"
           :name "flamethrower-turret"
           :ingredients
           [["steel-plate" 30]
            ["iron-gear-wheel" 15]
            ["pipe" 10]
            ["engine-unit" 5]]
           :energy_required 20
           :type "recipe"}
          {:enabled false
           :result "artillery-turret"
           :name "artillery-turret"
           :ingredients
           [["steel-plate" 60]
            ["concrete" 60]
            ["iron-gear-wheel" 40]
            ["advanced-circuit" 20]]
           :energy_required 40
           :type "recipe"}
          {:result "piercing-rounds-magazine"
           :name "piercing-rounds-magazine"
           :type "recipe"
           :ingredients
           [["firearm-magazine" 1] ["steel-plate" 1] ["copper-plate" 5]]
           :energy_required 3
           :enabled false}
          {:result "uranium-rounds-magazine"
           :name "uranium-rounds-magazine"
           :type "recipe"
           :ingredients [["piercing-rounds-magazine" 1] ["uranium-238" 1]]
           :energy_required 10
           :enabled false}
          {:result "rocket"
           :name "rocket"
           :type "recipe"
           :ingredients
           [["electronic-circuit" 1] ["explosives" 1] ["iron-plate" 2]]
           :energy_required 8
           :enabled false}
          {:result "explosive-rocket"
           :name "explosive-rocket"
           :type "recipe"
           :ingredients [["rocket" 1] ["explosives" 2]]
           :energy_required 8
           :enabled false}
          {:result "atomic-bomb"
           :name "atomic-bomb"
           :type "recipe"
           :ingredients
           [["processing-unit" 20] ["explosives" 10] ["uranium-235" 30]]
           :energy_required 50
           :enabled false}
          {:result "shotgun-shell"
           :name "shotgun-shell"
           :type "recipe"
           :ingredients [["copper-plate" 2] ["iron-plate" 2]]
           :energy_required 3
           :enabled false}
          {:result "piercing-shotgun-shell"
           :name "piercing-shotgun-shell"
           :type "recipe"
           :ingredients
           [["shotgun-shell" 2] ["copper-plate" 5] ["steel-plate" 2]]
           :energy_required 8
           :enabled false}
          {:result "railgun-dart"
           :name "railgun-dart"
           :type "recipe"
           :ingredients [["steel-plate" 5] ["electronic-circuit" 5]]
           :energy_required 8
           :enabled false}
          {:normal
           {:ingredients
            [["steel-plate" 2] ["plastic-bar" 2] ["explosives" 1]]
            :energy_required 8
            :result "cannon-shell"
            :enabled false}
           :name "cannon-shell"
           :type "recipe"
           :expensive
           {:ingredients
            [["steel-plate" 4] ["plastic-bar" 4] ["explosives" 1]]
            :energy_required 8
            :result "cannon-shell"
            :enabled false}}
          {:normal
           {:ingredients
            [["steel-plate" 2] ["plastic-bar" 2] ["explosives" 2]]
            :energy_required 8
            :result "explosive-cannon-shell"
            :enabled false}
           :name "explosive-cannon-shell"
           :type "recipe"
           :expensive
           {:ingredients
            [["steel-plate" 4] ["plastic-bar" 4] ["explosives" 2]]
            :energy_required 8
            :result "explosive-cannon-shell"
            :enabled false}}
          {:result "uranium-cannon-shell"
           :name "uranium-cannon-shell"
           :type "recipe"
           :ingredients [["cannon-shell" 1] ["uranium-238" 1]]
           :energy_required 12
           :enabled false}
          {:result "explosive-uranium-cannon-shell"
           :name "explosive-uranium-cannon-shell"
           :type "recipe"
           :ingredients [["explosive-cannon-shell" 1] ["uranium-238" 1]]
           :energy_required 12
           :enabled false}
          {:result "artillery-shell"
           :name "artillery-shell"
           :type "recipe"
           :ingredients
           [["explosive-cannon-shell" 4] ["radar" 1] ["explosives" 8]]
           :energy_required 15
           :enabled false}
          {:result "flamethrower-ammo"
           :name "flamethrower-ammo"
           :type "recipe"
           :category "chemistry"
           :ingredients
           [{:amount 5 :name "steel-plate" :type "item"}
            {:amount 50 :name "light-oil" :type "fluid"}
            {:amount 50 :name "heavy-oil" :type "fluid"}]
           :energy_required 6
           :crafting_machine_tint
           {:primary {:a 0.0 :r 0.845 :g 0.533 :b 0.0}
            :secondary {:a 0.0 :r 0.655 :g 0.0 :b 0.0}
            :tertiary {:a 0.0 :r 0.685 :g 0.329 :b 0.0}}
           :enabled false}
          {:energy_required 3.5
           :name "copper-plate"
           :ingredients [["copper-ore" 1]]
           :type "recipe"
           :category "smelting"
           :result "copper-plate"}
          {:energy_required 3.5
           :name "iron-plate"
           :ingredients [["iron-ore" 1]]
           :type "recipe"
           :category "smelting"
           :result "iron-plate"}
          {:energy_required 3.5
           :name "stone-brick"
           :ingredients [["stone" 2]]
           :type "recipe"
           :result "stone-brick"
           :category "smelting"
           :enabled true})))

(def extra-buses
  '({:name :bus/roboport}))

(def buses
  (concat extra-buses recipes))


