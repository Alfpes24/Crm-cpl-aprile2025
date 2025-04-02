document.getElementById("calculate-btn").addEventListener("click", function () {
    const rooms = parseInt(document.getElementById("rooms").value) || 0;
    const doctors = parseInt(document.getElementById("doctors").value) || 0;
    const cpl = parseInt(document.getElementById("cpl").value) || 0;
    const additionalLocations = parseInt(document.getElementById("additional-locations").value) || 0;
    const noa = parseInt(document.getElementById("noa").value) || 0;
    const noaPrice = parseInt(document.getElementById("noa-price").value) || 0;

    // Nuove tabelle da Excel
    const setupFeeTable = [99, 129, 129, 159, 159, 199, 199, 299, 299, 499, 599];
    const pricePerRoomTable = [270, 180, 160, 130, 110, 105, 95, 90, 85, 75, 70];

    const index = rooms >= 11 ? 10 : Math.max(rooms - 1, 0);
    const setupFee = setupFeeTable[index];
    const monthlyPricePerRoom = pricePerRoomTable[index];
    const monthlyPrice = monthlyPricePerRoom * rooms;

    // Additional locations cost
    const locationsCost = additionalLocations * 99;

    // NOA cost
    const noaTotalPrice = noa * noaPrice;

    // Total monthly price
    const totalMonthlyPrice = monthlyPrice + locationsCost + noaTotalPrice;

    // Sales commission calculation
    const commissionBase = monthlyPrice;
    const commissionCpl = doctors * (cpl === 17 ? 8 : 6);
    const commissionLocations = locationsCost;
    const commissionNoa = noa * noaPrice;

    const totalCommission = commissionBase + commissionCpl + commissionLocations + (setupFee / 12) + commissionNoa;

    document.getElementById("monthly-price").textContent = `${totalMonthlyPrice.toFixed(2)} €`;
    document.getElementById("setup-fee").textContent = `${setupFee.toFixed(2)} €`;
    document.getElementById("sales-commissions").textContent = `${totalCommission.toFixed(2)} €`;
});
