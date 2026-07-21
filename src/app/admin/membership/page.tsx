'use client';

import React, { useState, useEffect } from 'react';
import { createClient } from '../../../lib/supabase/client';
import { Sparkles, Plus, Trash2, Edit2, Copy, Save, X, Loader2 } from 'lucide-react';
import { MEMBERSHIP_PLANS, ALL_INCLUSIVE_PLANS, type MembershipPlan } from '../../../data/gymData';

export default function MembershipPlansManager() {
  const supabase = createClient();

  const [plans, setPlans] = useState<MembershipPlan[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const [isSaving, setIsSaving] = useState(false);
  const [editingPlan, setEditingPlan] = useState<Partial<MembershipPlan> | null>(null);

  // Parse static initial items
  const initialPlans = [
    ...MEMBERSHIP_PLANS.map(p => ({ ...p, is_all_inclusive: false })),
    ...ALL_INCLUSIVE_PLANS.map(p => ({ ...p, is_all_inclusive: true }))
  ];

  const fetchPlans = async () => {
    setIsLoading(true);
    try {
      const { data, error } = await supabase
        .from('membership_plans')
        .select('*')
        .order('price', { ascending: true });

      if (error) throw error;
      if (data && data.length > 0) {
        setPlans(data.map((p: any) => ({
          id: p.id,
          name: p.name,
          price: parseFloat(p.price),
          durationDays: p.duration_days,
          durationLabel: p.duration_label,
          monthlyBreakdown: p.monthly_breakdown,
          isPopular: p.is_popular,
          isBestValue: p.is_best_value,
          is_all_inclusive: p.is_all_inclusive,
          features: p.features
        })));
      } else {
        setPlans(initialPlans as any);
      }
    } catch (err: any) {
      console.warn('Fallback index used: Supabase connection failed.', err.message);
      setPlans(initialPlans as any);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    fetchPlans();
  }, []);

  const handleEdit = (plan: MembershipPlan) => {
    setEditingPlan({ ...plan });
  };

  const handleCreate = () => {
    setEditingPlan({
      name: '',
      price: 1500,
      durationDays: 30,
      durationLabel: '30 Days',
      monthlyBreakdown: '',
      isPopular: false,
      isBestValue: false,
      is_all_inclusive: false,
      features: ['Full Gym & Cardio Access']
    } as any);
  };

  const handleDuplicate = (plan: MembershipPlan) => {
    const copy = { ...plan, id: undefined, name: `${plan.name} (Copy)` };
    setEditingPlan(copy);
  };

  const handleDelete = async (id: string) => {
    if (!confirm('Are you sure you want to delete this membership plan?')) return;

    try {
      const { error } = await supabase
        .from('membership_plans')
        .delete()
        .eq('id', id);

      if (error) throw error;
      alert('Plan deleted.');
      fetchPlans();
    } catch (err: any) {
      alert(`Delete failed: ${err.message}`);
    }
  };

  const handleSave = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!editingPlan) return;

    setIsSaving(true);
    try {
      const payload = {
        name: editingPlan.name,
        price: editingPlan.price,
        duration_days: editingPlan.durationDays,
        duration_label: editingPlan.durationLabel,
        monthly_breakdown: editingPlan.monthlyBreakdown,
        is_popular: editingPlan.isPopular,
        is_best_value: editingPlan.isBestValue,
        is_all_inclusive: (editingPlan as any).is_all_inclusive || false,
        features: editingPlan.features
      };

      let error;
      if (editingPlan.id) {
        // Update
        const { error: err } = await supabase
          .from('membership_plans')
          .update(payload)
          .eq('id', editingPlan.id);
        error = err;
      } else {
        // Insert
        const { error: err } = await supabase
          .from('membership_plans')
          .insert([payload]);
        error = err;
      }

      if (error) throw error;
      alert('Plan saved successfully!');
      setEditingPlan(null);
      fetchPlans();
    } catch (err: any) {
      alert(`Save failed: ${err.message}`);
    } finally {
      setIsSaving(false);
    }
  };

  return (
    <div className="space-y-10">
      
      {/* Header */}
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
        <div>
          <span className="text-xs font-body font-bold uppercase tracking-widest text-[#787866] flex items-center gap-1.5 mb-1.5">
            <Sparkles className="w-4 h-4 text-[#4A5300]" />
            <span>Pricing Configurator</span>
          </span>
          <h2 className="font-headline text-4xl text-[#1E1E1A] uppercase tracking-wide">
            Membership Packages CRUD
          </h2>
        </div>

        <button
          onClick={handleCreate}
          className="px-6 py-3.5 bg-[#4A5300] hover:bg-[#3d4400] text-white font-body font-extrabold text-xs uppercase tracking-wider rounded-xl transition-all duration-200 shadow-md flex items-center gap-2 cursor-pointer"
        >
          <Plus className="w-4 h-4 text-[#F0FF00]" />
          <span>Add New Package</span>
        </button>
      </div>

      {/* Editing Form Modal */}
      {editingPlan && (
        <div className="fixed inset-0 z-50 bg-black/60 backdrop-blur-xs flex items-center justify-center p-4">
          <div className="w-full max-w-[560px] bg-[#E5E2DA] border border-[#787866]/30 p-8 rounded-[32px] shadow-2xl relative max-h-[90vh] overflow-y-auto">
            <button
              onClick={() => setEditingPlan(null)}
              className="absolute right-6 top-6 text-[#787866] hover:text-[#1E1E1A]"
            >
              <X className="w-5 h-5" />
            </button>

            <h3 className="font-headline text-2xl text-[#1E1E1A] mb-6 uppercase tracking-wider">
              {editingPlan.id ? 'Edit Package' : 'Create Package'}
            </h3>

            <form onSubmit={handleSave} className="space-y-5">
              <div className="space-y-1.5">
                <label className="text-[10px] font-bold text-[#787866] uppercase tracking-wider block">
                  Plan Name / Duration label
                </label>
                <input
                  type="text"
                  required
                  value={editingPlan.name}
                  onChange={e => setEditingPlan({ ...editingPlan, name: e.target.value })}
                  placeholder="e.g., 3 Months"
                  className="w-full px-4 py-3 bg-[#EFECE6] border border-[#787866]/30 rounded-xl text-sm font-body text-[#1E1E1A] focus:outline-hidden"
                />
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-1.5">
                  <label className="text-[10px] font-bold text-[#787866] uppercase tracking-wider block">
                    Price (INR)
                  </label>
                  <input
                    type="number"
                    required
                    value={editingPlan.price}
                    onChange={e => setEditingPlan({ ...editingPlan, price: parseFloat(e.target.value) || 0 })}
                    className="w-full px-4 py-3 bg-[#EFECE6] border border-[#787866]/30 rounded-xl text-sm font-body text-[#1E1E1A] focus:outline-hidden"
                  />
                </div>
                <div className="space-y-1.5">
                  <label className="text-[10px] font-bold text-[#787866] uppercase tracking-wider block">
                    Days Duration
                  </label>
                  <input
                    type="number"
                    required
                    value={editingPlan.durationDays}
                    onChange={e => setEditingPlan({ ...editingPlan, durationDays: parseInt(e.target.value) || 30 })}
                    className="w-full px-4 py-3 bg-[#EFECE6] border border-[#787866]/30 rounded-xl text-sm font-body text-[#1E1E1A] focus:outline-hidden"
                  />
                </div>
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-1.5">
                  <label className="text-[10px] font-bold text-[#787866] uppercase tracking-wider block">
                    Monthly Breakdown Text
                  </label>
                  <input
                    type="text"
                    value={editingPlan.monthlyBreakdown || ''}
                    onChange={e => setEditingPlan({ ...editingPlan, monthlyBreakdown: e.target.value })}
                    placeholder="e.g., ₹1,166 / month"
                    className="w-full px-4 py-3 bg-[#EFECE6] border border-[#787866]/30 rounded-xl text-sm font-body text-[#1E1E1A] focus:outline-hidden"
                  />
                </div>
                <div className="space-y-1.5">
                  <label className="text-[10px] font-bold text-[#787866] uppercase tracking-wider block">
                    Category Type
                  </label>
                  <select
                    value={(editingPlan as any).is_all_inclusive ? 'true' : 'false'}
                    onChange={e => setEditingPlan({ ...editingPlan, is_all_inclusive: e.target.value === 'true' } as any)}
                    className="w-full px-4 py-3 bg-[#EFECE6] border border-[#787866]/30 rounded-xl text-sm font-body text-[#1E1E1A] focus:outline-hidden"
                  >
                    <option value="false">Gym & Cardio Only</option>
                    <option value="true">All Packages (Yoga, Zumba, ABS)</option>
                  </select>
                </div>
              </div>

              <div className="flex gap-4 items-center py-2">
                <label className="flex items-center gap-2 text-xs font-body text-[#1E1E1A]">
                  <input
                    type="checkbox"
                    checked={editingPlan.isPopular || false}
                    onChange={e => setEditingPlan({ ...editingPlan, isPopular: e.target.checked })}
                    className="w-4 h-4"
                  />
                  <span>Popular Badge</span>
                </label>
                <label className="flex items-center gap-2 text-xs font-body text-[#1E1E1A]">
                  <input
                    type="checkbox"
                    checked={editingPlan.isBestValue || false}
                    onChange={e => setEditingPlan({ ...editingPlan, isBestValue: e.target.checked })}
                    className="w-4 h-4"
                  />
                  <span>Best Value Badge</span>
                </label>
              </div>

              <div className="space-y-1.5">
                <label className="text-[10px] font-bold text-[#787866] uppercase tracking-wider block">
                  Features List (One per line)
                </label>
                <textarea
                  rows={4}
                  value={editingPlan.features?.join('\n') || ''}
                  onChange={e => setEditingPlan({ ...editingPlan, features: e.target.value.split('\n').filter(Boolean) })}
                  placeholder="Full Gym & Cardio Access&#10;Locker & Washroom Facility"
                  className="w-full px-4 py-3 bg-[#EFECE6] border border-[#787866]/30 rounded-xl text-sm font-body text-[#1E1E1A] focus:outline-hidden resize-none leading-relaxed"
                />
              </div>

              <div className="pt-2">
                <button
                  type="submit"
                  disabled={isSaving}
                  className="w-full py-3.5 bg-[#4A5300] hover:bg-[#3d4400] text-white font-body font-bold text-xs uppercase tracking-wider rounded-xl transition-all duration-200 shadow-md flex items-center justify-center gap-2 cursor-pointer disabled:opacity-75"
                >
                  {isSaving ? (
                    <>
                      <Loader2 className="w-4 h-4 animate-spin text-[#F0FF00]" />
                      <span>Saving Plan Data...</span>
                    </>
                  ) : (
                    <span>Save & Deploy Plan</span>
                  )}
                </button>
              </div>
            </form>
          </div>
        </div>
      )}

      {/* Plans List Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {plans.map((plan) => (
          <div 
            key={plan.id}
            className="bg-[#E5E2DA] border border-[#787866]/20 p-6 rounded-[28px] shadow-sm flex flex-col justify-between"
          >
            <div>
              <div className="flex justify-between items-start gap-4">
                <div>
                  <h4 className="font-headline text-2xl text-[#1E1E1A] leading-none uppercase">
                    {plan.name}
                  </h4>
                  <span className="text-[10px] font-body text-[#787866] font-bold uppercase tracking-wider mt-1 block">
                    {(plan as any).is_all_inclusive ? 'All Inclusive Pass' : 'Gym & Cardio Only'}
                  </span>
                </div>
                <div className="text-right">
                  <span className="font-headline text-2xl text-[#4A5300]">
                    ₹{plan.price}
                  </span>
                  {plan.monthlyBreakdown && (
                    <span className="text-[10px] font-body text-[#787866] block">
                      {plan.monthlyBreakdown}
                    </span>
                  )}
                </div>
              </div>

              {/* Tags */}
              <div className="flex gap-2 mt-4">
                {plan.isPopular && (
                  <span className="text-[9px] font-bold px-2 py-0.5 rounded-md bg-[#F0FF00] text-[#1E1E1A] uppercase tracking-wider border border-black/5">
                    Popular
                  </span>
                )}
                {plan.isBestValue && (
                  <span className="text-[9px] font-bold px-2 py-0.5 rounded-md bg-[#00E5FF]/20 text-blue-900 uppercase tracking-wider border border-blue-500/10">
                    Best Value
                  </span>
                )}
              </div>

              {/* Features snippet */}
              <ul className="mt-4 space-y-1.5 text-xs text-[#787866] font-body list-disc pl-4 line-clamp-3">
                {plan.features.map((f, i) => (
                  <li key={i}>{f}</li>
                ))}
              </ul>
            </div>

            <div className="flex gap-3 border-t border-[#787866]/10 pt-4 mt-6">
              <button
                onClick={() => handleEdit(plan)}
                className="flex-1 py-2.5 rounded-xl bg-[#EFECE6] border border-[#787866]/30 text-[#1E1E1A] text-xs font-body font-extrabold uppercase tracking-wider flex items-center justify-center gap-1.5 hover:bg-white cursor-pointer"
              >
                <Edit2 className="w-3.5 h-3.5 text-[#4A5300]" />
                <span>Edit</span>
              </button>
              <button
                onClick={() => handleDuplicate(plan)}
                className="p-2.5 rounded-xl bg-[#EFECE6] border border-[#787866]/30 text-[#1E1E1A] hover:bg-white cursor-pointer"
              >
                <Copy className="w-4 h-4 text-[#787866]" />
              </button>
              <button
                onClick={() => handleDelete(plan.id)}
                className="p-2.5 rounded-xl bg-red-500/10 hover:bg-red-500/20 border border-red-500/20 text-red-700 cursor-pointer"
              >
                <Trash2 className="w-4 h-4" />
              </button>
            </div>
          </div>
        ))}
      </div>

    </div>
  );
}
