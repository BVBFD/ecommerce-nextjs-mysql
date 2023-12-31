// React 애플리케이션에서 상태 관리를 간단하게 처리하기 위한 라이브러리임
// Zustland는 상태 관리를 위한 더 간편한 API를 제공함.
// Redux, Mobx와 같은 상태 관리 라이브러리에 비해 더 경량하고 직관적인 방식임.
import { create } from "zustand";

// Zustand 특징
// 1. 간단한 API : Zustand는 간단한 함수를 통해 상태를 생성하고 업데이트하는 API를 제공. 이로써 상태를 간단하게 관리할 수 있음.
// 2. React Hooks와 통합 : Zustand는 React Hooks와 함께 사용. `useStore`와 같은 훅을 통해 컴포넌트를 쉽게 사용할 수 있음.
// 3. 컴포넌트 간 통신 : Zustand는 컴포넌트 간에 상태를 공유할 수 있는 간단한 방법을 제공합니다. 이를 통해서 전역 상태를 손쉽게 관리할 수 있습니다.
// 4. 리액트의 Context API를 이용한 성능 최적화 : Zustand는 리액트의 Context API를 기반으로 하며, 상태 업데이트가 필요한 컴포넌트만 리렌더링되도록 최적화되어 있습니다.
// 5. Immer 지원 : Zustand는 불변성을 유지하는 데 도움이 되는 Immer 라이브러리와 함께 사용될 수 있음.

// 여기서 불변성이란?
// 1. 수정 불가능한 값 : 데이터가 한 번 생성되면 해당 데이터의 값을 변경할 수 없음. 새로운 값을 생성하거나 기존 값을 복제하여 변경한 후에 사용.
// 2. 메모리 주소의 변화 : 불변성을 유지하려면 데이터의 수정이 필요한 경우에도 기존의 데이터는 그대로 유지되고, 새로운 데이터가 생성됨. 따라서 메모리 주소가 바뀌는 것이 일반적임.

// 불변성의 장점은?
// 1. 예측 가능한 상태 관리 : 불변성을 사용하면 상태의 변화를 예측하기 쉽습니다. 특히 React와 같은 뷰 라이브러리에서 상태 변화를 감지하고 업데이트할 때 도움이 됩니다.
// 2. 쉬운 이력 추적 : 불변성은 데이터의 변경 사항을 추적하기 쉽게 만듭니다. 변경 이력을 간단하게 추적할 수 있어 디버깅이나 코드 유지보수가 용이해집니다.
// 3. 쓰레드 안전성 : 다중 쓰레드 환경에서 불변성을 갖는 데이터는 여러 쓰레드에서 동시에 접근하여 수정할 때 예측 가능하게 동작할 수 있습니다.

// 불변성은 데이터가 한 번 생성되면 그 값을 직접적으로 변경할 수 없다는 개념입니다. 대신에, 변경이 필요한 경우에는 새로운 값을 생성하거나 기존 값을 복제한 후에 수정된 값을 사용합니다.
// JavaScript에서 기본적으로 제공되는 자료형 중에서 원시(primitive) 데이터 타입인 숫자(Number), 문자열(String), 불리언(Boolean), null, undefined는 불변성을 가지고 있습니다.
// 이들 값을 변경하려면 새로운 값을 생성해야 합니다.
// 객체나 배열과 같은 참조(reference) 타입의 데이터는 불변성을 유지하기가 좀 더 복잡합니다. \
// 불변성을 유지하면서 이들을 변경하려면 새로운 객체나 배열을 생성하거나, 불변성을 유지하는 라이브러리(예: Immer)를 사용하여 업데이트를 수행합니다.
// 불변성은 함수형 프로그래밍에서 중요한 개념 중 하나로, 상태를 예측 가능하게 만들고 예기치 않은 부작용을 방지하는 데 도움이 됩니다.
// React와 같은 뷰 라이브러리에서도 상태의 불변성을 유지하면서 업데이트하는 것이 권장되며, 이를 통해 성능 최적화와 상태 변화를 쉽게 추적할 수 있습니다.

interface useStoreModalStore {
  isOpen: boolean;
  onOpen: () => void;
  onClose: () => void;
}

export const useStoreModal = create<useStoreModalStore>((set) => ({
  isOpen: false,
  onOpen: () => set({ isOpen: true }),
  onClose: () => set({ isOpen: false }),
}));
