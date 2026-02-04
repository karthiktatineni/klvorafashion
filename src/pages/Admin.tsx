import { useState, useEffect } from "react";
import { db } from "@/lib/firebase";
import { collection, query, orderBy, onSnapshot, doc, updateDoc, deleteDoc, Timestamp } from "firebase/firestore";
import { Button } from "@/components/ui/button";
import { toast } from "sonner";
import {
    BarChart3,
    Package,
    Users,
    ShoppingBag,
    CheckCircle2,
    Clock,
    XCircle,
    Trash2,
    ExternalLink,
    ChevronRight,
    Search,
    LayoutDashboard
} from "lucide-react";

interface OrderItem {
    name: string;
    qty: number;
    price: number;
    size: string;
    color: string;
}

interface Order {
    id: string;
    name: string;
    email: string;
    phone: string;
    address: string;
    total: number;
    status: string;
    createdAt: any;
    items: OrderItem[];
}

const Admin = () => {
    const [orders, setOrders] = useState<Order[]>([]);
    const [loading, setLoading] = useState(true);
    const [isAuthenticated, setIsAuthenticated] = useState(false);
    const [password, setPassword] = useState("");
    const [searchTerm, setSearchTerm] = useState("");

    useEffect(() => {
        if (!isAuthenticated) return;

        const q = query(collection(db, "orders"), orderBy("createdAt", "desc"));
        const unsubscribe = onSnapshot(q, (snapshot) => {
            const ordersData = snapshot.docs.map(doc => ({
                id: doc.id,
                ...doc.data()
            })) as Order[];
            setOrders(ordersData);
            setLoading(false);
        });

        return () => unsubscribe();
    }, [isAuthenticated]);

    const handleLogin = (e: React.FormEvent) => {
        e.preventDefault();
        if (password === "admin123") { // Simple password for now, can be env var later
            setIsAuthenticated(true);
            toast.success("Welcome back, Admin");
        } else {
            toast.error("Invalid credentials");
        }
    };

    const updateStatus = async (orderId: string, newStatus: string) => {
        try {
            await updateDoc(doc(db, "orders", orderId), { status: newStatus });
            toast.success(`Order marked as ${newStatus}`);
        } catch (error) {
            toast.error("Failed to update status");
        }
    };

    const deleteOrder = async (orderId: string) => {
        if (!confirm("Are you sure you want to delete this order?")) return;
        try {
            await deleteDoc(doc(db, "orders", orderId));
            toast.success("Order deleted");
        } catch (error) {
            toast.error("Failed to delete order");
        }
    };

    const stats = {
        totalOrders: orders.length,
        totalRevenue: orders.reduce((acc, order) => acc + (order.total || 0), 0),
        pendingOrders: orders.filter(o => o.status === "pending").length,
        completedOrders: orders.filter(o => o.status === "delivered").length,
    };

    const filteredOrders = orders.filter(order =>
        order.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        order.phone.includes(searchTerm) ||
        order.id.includes(searchTerm)
    );

    if (!isAuthenticated) {
        return (
            <div className="min-h-screen bg-black flex items-center justify-center p-6">
                <div className="w-full max-w-md bg-zinc-900/50 backdrop-blur-xl border border-white/10 p-8 rounded-2xl shadow-2xl">
                    <div className="flex flex-col items-center mb-8">
                        <div className="w-16 h-16 bg-primary/20 rounded-full flex items-center justify-center mb-4">
                            <LayoutDashboard className="w-8 h-8 text-primary" />
                        </div>
                        <h1 className="text-2xl font-display text-white">KLVORA Admin</h1>
                        <p className="text-zinc-500 text-sm mt-1">Authorized access only</p>
                    </div>
                    <form onSubmit={handleLogin} className="space-y-4">
                        <input
                            type="password"
                            placeholder="Admin Password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            className="w-full bg-black border border-white/10 rounded-lg p-3 text-white focus:outline-none focus:ring-2 focus:ring-primary/50 transition-all"
                        />
                        <Button variant="champagne" className="w-full h-12" type="submit">
                            Access Dashboard
                        </Button>
                    </form>
                </div>
            </div>
        );
    }

    return (
        <div className="min-h-screen bg-black text-white font-body p-6 lg:p-12">
            <div className="max-w-7xl mx-auto">
                {/* Header */}
                <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 mb-12">
                    <div>
                        <h1 className="text-4xl font-display mb-2">Dashboard</h1>
                        <p className="text-zinc-500">Manage your store and track orders in real-time.</p>
                    </div>
                    <div className="flex items-center gap-4">
                        <div className="relative">
                            <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-zinc-500" />
                            <input
                                type="text"
                                placeholder="Search orders..."
                                value={searchTerm}
                                onChange={(e) => setSearchTerm(e.target.value)}
                                className="bg-zinc-900 border border-white/10 rounded-full pl-10 pr-4 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-primary/30 w-64"
                            />
                        </div>
                        <Button variant="outline" size="icon" onClick={() => setIsAuthenticated(false)}>
                            <ExternalLink className="w-4 h-4" />
                        </Button>
                    </div>
                </div>

                {/* Stats Grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
                    {[
                        { label: "Total Revenue", value: `$${stats.totalRevenue.toLocaleString()}`, icon: BarChart3, color: "text-primary" },
                        { label: "Total Orders", value: stats.totalOrders, icon: ShoppingBag, color: "text-blue-400" },
                        { label: "Pending", value: stats.pendingOrders, icon: Clock, color: "text-amber-400" },
                        { label: "Delivered", value: stats.completedOrders, icon: CheckCircle2, color: "text-emerald-400" },
                    ].map((stat, i) => (
                        <div key={i} className="bg-zinc-900/50 border border-white/5 p-6 rounded-2xl">
                            <div className="flex items-center justify-between mb-4">
                                <p className="text-zinc-500 text-sm tracking-widest uppercase">{stat.label}</p>
                                <stat.icon className={`w-5 h-5 ${stat.color}`} />
                            </div>
                            <p className="text-3xl font-display">{stat.value}</p>
                        </div>
                    ))}
                </div>

                {/* Orders Table */}
                <div className="bg-zinc-900/30 border border-white/5 rounded-2xl overflow-hidden backdrop-blur-sm">
                    <div className="p-6 border-b border-white/5 flex items-center justify-between">
                        <h2 className="text-xl font-display">Recent Orders</h2>
                        <Button variant="ghost" size="sm" className="text-primary hover:text-primary/80">View All</Button>
                    </div>
                    <div className="overflow-x-auto">
                        <table className="w-full text-left">
                            <thead>
                                <tr className="text-zinc-500 text-xs tracking-widest uppercase border-b border-white/5">
                                    <th className="px-6 py-4">Customer</th>
                                    <th className="px-6 py-4">Order Details</th>
                                    <th className="px-6 py-4">Total</th>
                                    <th className="px-6 py-4">Status</th>
                                    <th className="px-6 py-4 text-right">Actions</th>
                                </tr>
                            </thead>
                            <tbody className="divide-y divide-white/5">
                                {filteredOrders.map((order) => (
                                    <tr key={order.id} className="group hover:bg-white/5 transition-colors">
                                        <td className="px-6 py-6">
                                            <p className="font-semibold text-white">{order.name}</p>
                                            <p className="text-xs text-zinc-500 mt-1">{order.phone}</p>
                                            <p className="text-xs text-zinc-400 mt-0.5">{order.email}</p>
                                        </td>
                                        <td className="px-6 py-6">
                                            <div className="space-y-1">
                                                {order.items?.map((item, idx) => (
                                                    <p key={idx} className="text-sm text-zinc-300">
                                                        {item.qty}x {item.name} <span className="text-zinc-600">({item.size} / {item.color})</span>
                                                    </p>
                                                ))}
                                            </div>
                                            <p className="text-[10px] text-zinc-600 mt-2 uppercase tracking-tighter">ID: {order.id}</p>
                                        </td>
                                        <td className="px-6 py-6 font-display text-lg">
                                            ${order.total}
                                        </td>
                                        <td className="px-6 py-6">
                                            <span className={`px-3 py-1 rounded-full text-[10px] tracking-widest uppercase font-bold ${order.status === "pending" ? "bg-amber-500/10 text-amber-500 border border-amber-500/20" :
                                                    order.status === "confirmed" ? "bg-blue-500/10 text-blue-500 border border-blue-500/20" :
                                                        order.status === "delivered" ? "bg-emerald-500/10 text-emerald-500 border border-emerald-500/20" :
                                                            "bg-zinc-500/10 text-zinc-500 border border-zinc-500/20"
                                                }`}>
                                                {order.status}
                                            </span>
                                        </td>
                                        <td className="px-6 py-6 text-right">
                                            <div className="flex items-center justify-end gap-2">
                                                <SelectStatus
                                                    currentStatus={order.status}
                                                    onUpdate={(s) => updateStatus(order.id, s)}
                                                />
                                                <button
                                                    onClick={() => deleteOrder(order.id)}
                                                    className="p-2 text-zinc-500 hover:text-red-500 transition-colors"
                                                >
                                                    <Trash2 className="w-4 h-4" />
                                                </button>
                                            </div>
                                        </td>
                                    </tr>
                                ))}
                                {filteredOrders.length === 0 && (
                                    <tr>
                                        <td colSpan={5} className="px-6 py-20 text-center text-zinc-500">
                                            No orders found matching your search.
                                        </td>
                                    </tr>
                                )}
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </div>
    );
};

const SelectStatus = ({ currentStatus, onUpdate }: { currentStatus: string, onUpdate: (s: string) => void }) => {
    const statuses = ["pending", "confirmed", "shipped", "delivered", "cancelled"];
    return (
        <div className="relative group/select">
            <select
                value={currentStatus}
                onChange={(e) => onUpdate(e.target.value)}
                className="appearance-none bg-zinc-800 border border-white/10 rounded-lg px-3 py-1.5 text-xs text-white focus:outline-none focus:ring-1 focus:ring-primary cursor-pointer pr-8"
            >
                {statuses.map(s => (
                    <option key={s} value={s}>{s.charAt(0).toUpperCase() + s.slice(1)}</option>
                ))}
            </select>
            <div className="absolute right-2 top-1/2 -translate-y-1/2 pointer-events-none text-zinc-500">
                <ChevronRight className="w-3 h-3 rotate-90" />
            </div>
        </div>
    );
};

export default Admin;
