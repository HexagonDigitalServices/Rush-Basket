   <tr>
                  <th className={ordersPageStyles.tableHeaderCell}>Order ID</th>
                  <th className={ordersPageStyles.tableHeaderCell}>Date</th>
                  <th className={ordersPageStyles.tableHeaderCell}>Items</th>
                  <th className={ordersPageStyles.tableHeaderCell}>Total</th>
                  <th className={ordersPageStyles.tableHeaderCell}>Status</th>
                  <th className={ordersPageStyles.tableHeaderCell}>Actions</th>
                </tr>

     <span className={`${ordersPageStyles.statusBadge} ${order.status === 'Delivered' ? 'bg-emerald-500/20 text-emerald-200' :
                          order.status === 'Processing' ? 'bg-amber-500/20 text-amber-200' :
                            order.status === 'Shipped' ? 'bg-blue-500/20 text-blue-200' :
                              'bg-red-500/20 text-red-200'
                          }`}>
                          {order.status}
                        </span>

                                  {/* Order Totals */}
                      <div className="p-4 bg-emerald-800/50">
                        <div className="flex justify-between py-2">
                          <span className="text-emerald-300">Subtotal</span>
                          <span className="font-medium text-emerald-100">₹{selectedOrder.total.toFixed(2)}</span>
                        </div>
                        <div className="flex justify-between py-2">
                          <span className="text-emerald-300">Shipping</span>
                          <span className="font-medium text-emerald-400">Free</span>
                        </div>
                        <div className="flex justify-between py-2">
                          <span className="text-emerald-300">Delivery Charges</span>
                          <span className="font-medium text-emerald-100">₹{(selectedOrder.total * 0.05).toFixed(2)}</span>
                        </div>
                        <div className="flex justify-between pt-4 mt-2 border-t border-emerald-700">
                          <span className="text-lg font-bold text-emerald-100">Total</span>
                          <span className="text-lg font-bold text-emerald-300">
                            ₹{(selectedOrder.total * 1.05).toFixed(2)}
                          </span>
                        </div>
                      </div>


                              <span className={`px-2 py-1 rounded-full text-xs font-medium ${selectedOrder.status === 'Delivered' ? 'bg-emerald-500/20 text-emerald-200' :
                            selectedOrder.status === 'Shipped' ? 'bg-blue-500/20 text-blue-200' :
                              selectedOrder.status === 'Cancelled' ? 'bg-red-500/20 text-red-200' :
                                'bg-amber-500/20 text-amber-200'
                            }`}>
                            {selectedOrder.status}
                          </span>
