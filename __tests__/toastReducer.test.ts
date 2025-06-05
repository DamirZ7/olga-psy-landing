import { reducer } from '../hooks/use-toast';

describe('toast reducer', () => {
  it('adds a toast', () => {
    const initial = { toasts: [] };
    const state = reducer(initial, {
      type: 'ADD_TOAST',
      toast: { id: '1', title: 'Hi', open: true },
    });
    expect(state.toasts).toHaveLength(1);
    expect(state.toasts[0].id).toBe('1');
  });

  it('updates a toast', () => {
    const initial = { toasts: [{ id: '1', title: 'Hi', open: true }] };
    const state = reducer(initial, {
      type: 'UPDATE_TOAST',
      toast: { id: '1', title: 'Updated' },
    });
    expect(state.toasts[0].title).toBe('Updated');
  });

  it('dismisses a toast', () => {
    const initial = { toasts: [{ id: '1', title: 'Hi', open: true }] };
    const state = reducer(initial, {
      type: 'DISMISS_TOAST',
      toastId: '1',
    });
    expect(state.toasts[0].open).toBe(false);
  });

  it('removes a toast', () => {
    const initial = { toasts: [{ id: '1', title: 'Hi', open: true }] };
    const state = reducer(initial, {
      type: 'REMOVE_TOAST',
      toastId: '1',
    });
    expect(state.toasts).toHaveLength(0);
  });
});
