  const [orders, setOrders] = useState([]);
  const [filteredOrders, setFilteredOrders] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [statusFilter, setStatusFilter] = useState('All');
  const [paymentFilter, setPaymentFilter] = useState('All');
  const [selectedOrder, setSelectedOrder] = useState(null);
  const [isDetailModalOpen, setIsDetailModalOpen] = useState(false);

const statusOptions = ['All', 'Pending', 'Processing', 'Shipped', 'Delivered', 'Cancelled'];

      result = result.filter(order =>
        order.id.toLowerCase().includes(term) ||
        order.customer.name.toLowerCase().includes(term) ||
        order.customer.phone.includes(term) ||
        (order.customer.email && order.customer.email.toLowerCase().includes(term)))


    <tr>
                  <th className={styles.tableHeaderCell}>Order ID</th>
                  <th className={styles.tableHeaderCell}>Customer</th>
                  <th className={styles.tableHeaderCell}>Date</th>
                  <th className={styles.tableHeaderCell}>Items</th>
                  <th className={styles.tableHeaderCell}>Total</th>
                  <th className={styles.tableHeaderCell}>Status</th>
                  <th className={styles.tableHeaderCell}>Payment</th>
                  <th className={styles.tableHeaderCell}>Actions</th>
                </tr>

   {/* Order Totals */}
                      <div className={styles.modalOrderTotalSection}>
                        <div className={styles.modalOrderTotalRow}>
                          <span className="text-gray-600">Subtotal</span>
                          <span className="font-medium">₹{selectedOrder.total.toFixed(2)}</span>
                        </div>
                        <div className={styles.modalOrderTotalRow}>
                          <span className="text-gray-600">Shipping</span>
                          <span className="font-medium text-emerald-600">Free</span>
                        </div>
                        <div className={styles.modalOrderTotalRow}>
                          <span className="text-gray-600">Tax (5%)</span>
                          <span className="font-medium">₹{(selectedOrder.total * 0.05).toFixed(2)}</span>
                        </div>
                        <div className={styles.modalOrderTotalRowLast}>
                          <span className="text-lg font-bold">Total</span>
                          <span className="text-lg font-bold text-emerald-700">
                            ₹{(selectedOrder.total * 1.05).toFixed(2)}
                          </span>
                        </div>
                      </div>
