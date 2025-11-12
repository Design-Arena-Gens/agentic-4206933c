import './globals.css';

export default function Page() {
  return (
    <main className="container">
      <header className="header">
        <h1>Why Hydrogen-Powered Cars Haven?t Succeeded (So Far)</h1>
        <p className="subtitle">
          A brief, high-signal explainer of the main technical, economic, and
          ecosystem reasons.
        </p>
      </header>

      <section className="card">
        <h2>1) End-to-end efficiency disadvantage</h2>
        <p>
          Making green hydrogen, compressing or liquefying it, transporting it,
          and converting it back to electricity in a fuel cell wastes large
          amounts of energy. By contrast, battery-electric vehicles (BEVs)
          deliver electricity to wheels with far fewer conversion losses. In
          typical real-world comparisons, BEVs can use 2?3? less energy per km
          than hydrogen fuel-cell vehicles (FCEVs) for the same duty.
        </p>
      </section>

      <section className="card">
        <h2>2) High fuel and vehicle costs</h2>
        <ul>
          <li>
            <strong>Fuel price:</strong> Clean hydrogen (from electrolysis) is
            still expensive after accounting for electricity, water, and
            compression/liquefaction. Delivered retail prices per kg remain
            high, and FCEV efficiency means total cost per mile is not
            competitive with home-charged BEVs in most regions.
          </li>
          <li>
            <strong>Stack and balance-of-plant:</strong> Fuel cells require
            platinum-group catalysts, humidification, air compression, thermal
            management, and purification, adding cost and complexity.
          </li>
        </ul>
      </section>

      <section className="card">
        <h2>3) Sparse, fragile refueling infrastructure</h2>
        <p>
          Hydrogen stations are capital-intensive, need high uptime compression
          and storage equipment, and serve relatively few cars per site.
          Meanwhile, charging can piggyback on ubiquitous electricity
          infrastructure?home, workplace, and public fast charging?spreading
          cost over more users with simpler equipment.
        </p>
      </section>

      <section className="card">
        <h2>4) Storage and logistics challenges</h2>
        <p>
          Hydrogen?s low volumetric energy density requires either very high
          compression (e.g., 700 bar), liquefaction at cryogenic temperatures,
          or chemical carriers?each with energy penalties, safety constraints,
          and cost. Distribution at scale is nontrivial compared to moving
          electrons over the grid.
        </p>
      </section>

      <section className="card">
        <h2>5) Use-case fit favors BEVs in light-duty</h2>
        <p>
          Most passenger trips fit daily ranges easily served by BEVs. Home and
          workplace charging are convenient and cheap; fast charging keeps
          improving. Hydrogen?s main advantage?quick refueling?hasn?t outweighed
          its higher costs and fuel unavailability for typical drivers.
        </p>
      </section>

      <section className="card">
        <h2>6) Chicken-and-egg market dynamics</h2>
        <p>
          Automakers hesitate to build many FCEVs without stations; investors
          hesitate to build stations without cars. BEVs broke this stalemate by
          leveraging existing grids and scaling battery production, which drove
          costs down further.
        </p>
      </section>

      <section className="card">
        <h2>7) Decarbonization pathway inefficiencies</h2>
        <p>
          Limited supplies of truly low-carbon hydrogen are prioritized where
          hydrogen is uniquely valuable: steel, ammonia, refineries, some heavy
          industry, and potentially long-haul shipping or aviation. Light-duty
          cars are not the most efficient sink for scarce green H? today.
        </p>
      </section>

      <section className="card">
        <h2>8) Industry pullback</h2>
        <p>
          Several OEMs and regions have scaled back FCEV roadmaps as BEV sales
          accelerate, charging networks expand, and battery costs fall. Without
          strong policy mandates or clear TCO advantages, FCEV passenger cars
          remain niche.
        </p>
      </section>

      <section className="card">
        <h2>Where hydrogen can still make sense</h2>
        <p>
          Hydrogen is promising where batteries struggle: high-temperature
          industry, seasonal energy storage, possibly some heavy-duty trucking,
          maritime, and aviation. These niches do not generalize to mainstream
          passenger cars.
        </p>
      </section>

      <footer className="footer">
        <p>
          Summary: For light-duty cars, hydrogen faces a structural efficiency
          gap, higher fuel and system costs, and infrastructure hurdles, while
          BEVs align with existing grids and user habits. As technologies evolve,
          these conclusions could shift?but today, BEVs dominate on cost and
          practicality.
        </p>
      </footer>
    </main>
  );
}
