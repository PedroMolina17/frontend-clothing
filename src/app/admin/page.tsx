const Admin = () => {
  return (
    <div className="p-8">
      <h1 className="text-4xl font-bold mb-6">Texto Ficticio por tiempo</h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 mb-8">
        <div className="bg-[#393939] text-white p-6 rounded-lg shadow-lg">
          <h2 className="text-xl font-bold">Total Sales</h2>
          <p className="text-2xl mt-4">$12,345</p>
        </div>
        <div className="bg-[#393939] text-white p-6 rounded-lg shadow-lg">
          <h2 className="text-xl font-bold">New Users</h2>
          <p className="text-2xl mt-4">123</p>
        </div>
        <div className="bg-[#393939] text-white p-6 rounded-lg shadow-lg">
          <h2 className="text-xl font-bold">Pending Orders</h2>
          <p className="text-2xl mt-4">45</p>
        </div>
      </div>

      <div className="bg-gray-100 p-6 rounded-lg shadow-lg mb-8">
        <h2 className="text-2xl font-semibold mb-4">Información importante</h2>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
          nec metus vel risus tincidunt vulputate. Vivamus non sem sed nulla
          varius dapibus non vel ligula. Curabitur feugiat quam sed magna
          suscipit, vel commodo lacus facilisis. Nam pharetra ligula a risus
          vehicula, in mollis dolor lacinia. Quisque suscipit justo non risus
          tristique, non vestibulum lorem faucibus.
        </p>
      </div>

      <div className="bg-gray-100 p-6 rounded-lg shadow-lg">
        <h2 className="text-2xl font-semibold mb-4">Últimos comentarios</h2>
        <ul className="list-disc list-inside">
          <li>Usuario1: Excelente servicio.</li>
          <li>Usuario2: Me gustaría más opciones de pago.</li>
          <li>Usuario3: El diseño de la página es genial.</li>
          <li>Usuario4: Muy rápido el envío.</li>
        </ul>
      </div>
    </div>
  );
};

export default Admin;
